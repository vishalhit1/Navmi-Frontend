import { useState, useEffect } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import amico from "../assets/amico.png";
import dasas from "../assets/dsa.jpeg";
import axios from "axios";
import Swal from "sweetalert2";

const BecamePartner = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);

  const indian_states_cities = {
    "Andhra Pradesh": [
      "Visakhapatnam", "Vijayawada", "Guntur", "Tirupati", "Rajahmundry",
      "Kakinada", "Eluru", "Nellore", "Kurnool", "Anantapur", "Chittoor",
      "Kadapa", "Vizianagaram", "Machilipatnam", "Guntakal", "Hindupur",
      "Narasaraopet", "Tadepalligudem", "Tenali", "Ongole", "Adoni",
      "Bhimavaram", "Gudivada", "Nuzvid", "Palasa", "Rajamahendravaram"
    ],
    "Arunachal Pradesh": [
      "Itanagar", "Tawang", "Bomdila", "Ziro", "Pasighat", "Tezu",
      "Roing", "Daporijo", "Along", "Aalo", "Yingkiong", "Seppa",
      "Khonsa", "Anini", "Miao", "Namsai", "Bordumsa", "Wakro"
    ],
    "Assam": [
      "Guwahati", "Dibrugarh", "Jorhat", "Silchar", "Nagaon", "Tezpur",
      "Tinsukia", "Bongaigaon", "Dhemaji", "Golaghat", "Karimganj",
      "Kokrajhar", "Nalbari", "Morigaon", "Dhubri", "Nayagarh",
      "Hailakandi", "Barpeta", "North Guwahati", "Sibsagar"
    ],
    "Bihar": [
      "Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Purnia", "Ara",
      "Buxar", "Kishanganj", "Sasaram", "Hajipur", "Dehri", "Siwan",
      "Motihari", "Begusarai", "Jamalpur", "Bettiah", "Arwal", "Saharsa",
      "Jehanabad", "Lakhisarai", "Madhepura", "Munger", "Samastipur",
      "Sheikhpura", "Sitamarhi", "Supaul"
    ],
    "Chhattisgarh": [
      "Raipur", "Bhilai", "Bilaspur", "Durg", "Rajnandgaon", "Korba",
      "Raigarh", "Jagdalpur", "Ambikapur", "Dhamtari", "Kawardha",
      "Mahasamund", "Sukma", "Kanker", "Jashpur", "Surguja", "Balod",
      "Balrampur", "Gariaband", "Kabirdham"
    ],
    "Goa": [
      "Panaji", "Vasco da Gama", "Margao", "Mapusa", "Ponda", "Cuncolim",
      "Bicholim", "Curchorem", "Quepem", "Sanquelim", "Calangute",
      "Candolim", "Colva", "Old Goa", "Arambol"
    ],
    "Gujarat": [
      "Ahmedabad", "Surat", "Vadodara", "Rajkot", "Gandhinagar", "Junagadh",
      "Bhavnagar", "Jamnagar", "Porbandar", "Anand", "Navsari", "Morbi",
      "Surendranagar", "Mehsana", "Godhra", "Palanpur", "Valsad", "Amreli",
      "Botad", "Dhrangadhra", "Veraval", "Mundra", "Deesa", "Viramgam"
    ],
    "Haryana": [
      "Gurugram", "Faridabad", "Chandigarh", "Panipat", "Ambala", "Hisar",
      "Karnal", "Rohtak", "Sonipat", "Yamunanagar", "Panchkula", "Kurukshetra",
      "Rewari", "Jhajjar", "Mahendragarh", "Sirsa", "Kaithal", "Fatehabad",
      "Palwal", "Narnaul"
    ],
    "Himachal Pradesh": [
      "Shimla", "Dharamshala", "Kullu", "Manali", "Mandi", "Solan",
      "Hamirpur", "Una", "Palampur", "Bilaspur", "Nahan", "Chamba",
      "Kangra", "Sundernagar", "Dalhousie", "Kasauli", "Parwanoo"
    ],
    "Jharkhand": [
      "Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh",
      "Giridih", "Ramgarh", "Chirkunda", "Medininagar", "Garwa", "Chaibasa",
      "Dumka", "Gumla", "Godda", "Khunti", "Saraikela", "Simdega"
    ],
    "Karnataka": [
      "Bengaluru", "Mysuru", "Hubli", "Mangaluru", "Belagavi", "Davanagere",
      "Ballari", "Vijayapura", "Shivamogga", "Tumakuru", "Kolar", "Mandya",
      "Raichur", "Hassan", "Chitradurga", "Udupi", "Davangere", "Hospet",
      "Gadag", "Bidar", "Chikmagalur", "Ramanagara"
    ],
    "Kerala": [
      "Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam",
      "Alappuzha", "Kannur", "Manjeri", "Kottayam", "Palakkad", "Tirur",
      "Kayamkulam", "Thalassery", "Cherthala", "Vadakara", "Changanacherry",
      "Pala", "Perumbavoor"
    ],
    "Madhya Pradesh": [
      "Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar",
      "Dewas", "Satna", "Ratlam", "Rewa", "Burhanpur", "Morena",
      "Bhind", "Khandwa", "Khargone", "Neemuch", "Pithampur", "Chhatarpur",
      "Damoh", "Hoshangabad", "Itarsi", "Seoni"
    ],
    "Maharashtra": [
      "Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur",
      "Amravati", "Kolhapur", "Akola", "Ahmednagar", "Jalgaon", "Nanded",
      "Sangli", "Satara", "Wardha", "Yavatmal", "Chandrapur", "Parbhani",
      "Latur", "Jalna", "Hingoli", "Gondia", "Washim"
    ],
    "Manipur": [
      "Imphal", "Churachandpur", "Thoubal", "Bishnupur", "Kakching",
      "Moirang", "Ukhrul", "Tamenglong", "Senapati", "Jiribam", "Tiddim",
      "Kangpokpi", "Tengnoupal"
    ],
    "Meghalaya": [
      "Shillong", "Tura", "Nongstoin", "Jowai", "Nongpoh", "Williamnagar",
      "Baghmara", "Mairang", "Mawlai", "Mawsynram", "Cherrapunji"
    ],
    "Mizoram": [
      "Aizawl", "Lunglei", "Serchhip", "Champhai", "Kolasib", "Mamit",
      "Saiha", "Lawngtlai", "Thenzawl", "Hnahthial", "Vairengte"
    ],
    "Nagaland": [
      "Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Mon",
      "Zunheboto", "Peren", "Pfutsero", "Longleng", "Phek"
    ],
    "Odisha": [
      "Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur",
      "Puri", "Balasore", "Baripada", "Jeypore", "Kendrapara", "Bhawanipatna",
      "Dhenkanal", "Angul", "Balangir", "Jharsuguda", "Koraput", "Paradip"
    ],
    "Punjab": [
      "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Mohali", "Bathinda",
      "Hoshiarpur", "Moga", "Gurdaspur", "Faridkot", "Firozpur", "Muktsar",
      "Kapurthala", "Tarn Taran", "Sangrur", "Nawanshahr", "Mansa"
    ],
    "Rajasthan": [
      "Jaipur", "Udaipur", "Jodhpur", "Kota", "Ajmer", "Bikaner",
      "Bharatpur", "Alwar", "Sikar", "Mount Abu", "Pushkar", "Chittorgarh",
      "Jaisalmer", "Barmer", "Ganganagar", "Jhalawar", "Bundi", "Jhunjhunu"
    ],
    "Sikkim": [
      "Gangtok", "Namchi", "Mangan", "Pelling", "Geyzing", "Soreng",
      "Rangpo", "Pakyong", "Yuksom", "Lachung", "Lachen"
    ],
    "Tamil Nadu": [
      "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem",
      "Tirunelveli", "Erode", "Vellore", "Kancheepuram", "Thanjavur",
      "Dindigul", "Hosur", "Karur", "Kumbakonam", "Nagapattinam",
      "Nagercoil", "Pudukkottai", "Rajapalayam", "Sivakasi", "Virudhunagar"
    ],
    "Telangana": [
      "Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam",
      "Khammam", "Nalgonda", "Mahbubnagar", "Adilabad", "Mancherial",
      "Siddipet", "Suryapet", "Jagtial"
    ],
    "Tripura": [
      "Agartala", "Udaipur", "Dharmanagar", "Kadamtala", "Belonia",
      "Kailashahar", "Ambassa", "Sonamura", "Khowai"
    ],
    "Uttar Pradesh": [
      "Lucknow", "Kanpur", "Varanasi", "Agra", "Meerut", "Ghaziabad",
      "Allahabad", "Gorakhpur", "Bareilly", "Moradabad", "Aligarh",
      "Jhansi", "Mathura", "Ayodhya", "Allahabd", "Muzaffarnagar",
      "Rampur", "Shahjahanpur", "Firozabad", "Etawah", "Mainpuri",
      "Etah", "Budaun", "Bijnor", "Pilibhit"
    ],
    "Uttarakhand": [
      "Dehradun", "Haridwar", "Rishikesh", "Rudraprayag", "Tehri",
      "Nainital", "Almora", "Chamoli", "Pauri", "Uttarkashi", "Rudra Prayag",
      "Bageshwar", "Champawat", "Pithoragarh"
    ],
    "West Bengal": [
      "Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman",
      "Malda", "Kharagpur", "Haldia", "Rajshahi", "Murshidabad", "Midnapur",
      "Hooghly", "Raiganj", "Nabadwip"
    ]
  }

  // Form state variables - properly aligned with actual form fields
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobileno: "",
    panno: "",
    emailId: "",
    selectprofess: "",
    selectstate: "",
    selectcity: ""
  });

  // Form validation states
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [shouldSubmit, setShouldSubmit] = useState(false);

  // Handle state change and update cities
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(indian_states_cities[state] || []);

    // Update formData with selected state
    setFormData({
      ...formData,
      selectstate: state
    });
  };

  // Handle city selection
  const handleCityChange = (e) => {
    const city = e.target.value;
    setFormData({
      ...formData,
      selectcity: city
    });
  };

  // Handle field changes for all inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error for the field being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: undefined
      });
    }
  };

  // Form validation function - updated to match actual form fields
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    // First Name validation
    if (!formData.firstname) {
      tempErrors.firstname = "First Name is required";
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastname) {
      tempErrors.lastname = "Last Name is required";
      isValid = false;
    }

    // Mobile Number validation
    if (!formData.mobileno) {
      tempErrors.mobileno = "Mobile Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileno.toString().replace(/\s/g, ''))) {
      tempErrors.mobileno = "Mobile Number must be 10 digits";
      isValid = false;
    }

    // PAN Number validation
    if (!formData.panno) {
      tempErrors.panno = "PAN Number is required";
      isValid = false;
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panno)) {
      tempErrors.panno = "Please enter a valid PAN Number";
      isValid = false;
    }

    // Email validation
    if (!formData.emailId) {
      tempErrors.emailId = "Email ID is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
      tempErrors.emailId = "Email address is invalid";
      isValid = false;
    }

    // Profession validation
    if (!formData.selectprofess) {
      tempErrors.selectprofess = "Profession is required";
      isValid = false;
    }

    // State validation
    if (!formData.selectstate) {
      tempErrors.selectstate = "State is required";
      isValid = false;
    }

    // City validation
    if (!formData.selectcity && formData.selectstate) {
      tempErrors.selectcity = "City is required";
      isValid = false;
    }

    setErrors(tempErrors);

    if (!isValid) {
      // Show validation errors with SweetAlert
      Swal.fire({
        icon: 'warning',
        title: 'Validation Error',
        text: 'Please check all fields and try again.',
        confirmButtonColor: '#DA3731'
      });
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShouldSubmit(true);
    }
  };

  // Reset form after submission
  const resetForm = () => {
    setFormData({
      firstname: "",
      lastname: "",
      mobileno: "",
      panno: "",
      emailId: "",
      selectprofess: "",
      selectstate: "",
      selectcity: ""
    });
    setSelectedState("");
    setCities([]);
    setErrors({});
  };

  // UseEffect for form submission with try/catch
  useEffect(() => {
    if (!shouldSubmit) return;

    const sendFormData = async () => {
      setIsSubmitting(true);

      // Show loading state
      Swal.fire({
        title: 'Submitting...',
        html: 'Please wait while we process your application',
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        }
      });

      try {
        // Replace with your actual API endpoint
        const response = await axios.post("http://localhost:8000/mail/becameapartner", formData);

        console.log("Form submission response:", response.data);

        // Show success message
        Swal.fire({
          title: 'Success!',
          text: 'Your partner application has been submitted successfully',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        }).then(() => {
          resetForm();
        });

      } catch (error) {
        console.error("Form submission error:", error);

        // Show error message
        Swal.fire({
          title: 'Submission Failed',
          text: error.response?.data?.message || 'Failed to submit form. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } finally {
        setIsSubmitting(false);
        setShouldSubmit(false);
      }
    };

    sendFormData();
  }, [shouldSubmit]);

  return (
    <div>
      <section className="introduction">
        <h3>Become a Partner</h3>
      </section>
      <section className="businesslevel">
        <h3>Take your business to the next level</h3>
        <Container>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col lg={3}>
                <img className="w-100" src={amico} alt="Partner illustration" />
              </Col>
              <Col lg={8}>
                <Row>
                  <Col lg={6}>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
                      placeholder="Your First Name *"
                    />
                    {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                  </Col>
                  <Col lg={6}>
                    <label>Last Name</label>
                    <input
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                      placeholder="Your Last Name *"
                    />
                    {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                  </Col>
                  <Col lg={6}>
                    <label>Mobile Number</label>
                    <input
                      type="text"
                      name="mobileno"
                      value={formData.mobileno}
                      onChange={handleInputChange}
                      className={`form-control ${errors.mobileno ? 'is-invalid' : ''}`}
                      placeholder="Your Mobile Number *"
                    />
                    {errors.mobileno && <div className="invalid-feedback">{errors.mobileno}</div>}
                  </Col>
                  <Col lg={6}>
                    <label>Pan Number</label>
                    <input
                      type="text"
                      name="panno"
                      value={formData.panno}
                      onChange={handleInputChange}
                      className={`form-control ${errors.panno ? 'is-invalid' : ''}`}
                      placeholder="Your Pan Number *"
                    />
                    {errors.panno && <div className="invalid-feedback">{errors.panno}</div>}
                  </Col>
                  <Col lg={6}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleInputChange}
                      className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                      placeholder="Your Email Address *"
                    />
                    {errors.emailId && <div className="invalid-feedback">{errors.emailId}</div>}
                  </Col>
                  <Col lg={6}>
                    <label>Select Profession</label>
                    <Form.Select
                      name="selectprofess"
                      value={formData.selectprofess}
                      onChange={handleInputChange}
                      className={`form-control ${errors.selectprofess ? 'is-invalid' : ''}`}
                    >
                      <option value="">Select Profession</option>
                      <option value="Agriculture/Farmer">Agriculture/Farmer</option>
                      <option value="Builder">Builder</option>
                      <option value="Chartered Accountant">Chartered Accountant</option>
                      <option value="DSA/DST">DSA/DST</option>
                      <option value="Ex-banker">Ex-banker</option>
                      <option value="Financial Analyst">Financial Analyst</option>
                      <option value="Financial Consultant">Financial Consultant</option>
                      <option value="Freelancer">Freelancer</option>
                      <option value="Insurance Advisor">Insurance Advisor</option>
                      <option value="Loan Agent">Loan Agent</option>
                      <option value="Mutual Fund Agent">Mutual Fund Agent</option>
                      <option value="Real Estate Agent/Broker">Real Estate Agent/Broker</option>
                      <option value="Tax Consultant">Tax Consultant</option>
                      <option value="Others">Others</option>
                    </Form.Select>
                    {errors.selectprofess && <div className="invalid-feedback">{errors.selectprofess}</div>}
                  </Col>
                  <Col lg={6}>
                    <label>Select State</label>
                    <Form.Select
                      name="selectstate"
                      className={`form-control ${errors.selectstate ? 'is-invalid' : ''}`}
                      onChange={handleStateChange}
                      value={selectedState}
                    >
                      <option value="">Select State</option>
                      {Object.keys(indian_states_cities).map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </Form.Select>
                    {errors.selectstate && <div className="invalid-feedback">{errors.selectstate}</div>}
                  </Col>

                  <Col lg={6}>
                    <label>Select City</label>
                    <Form.Select
                      name="selectcity"
                      value={formData.selectcity}
                      onChange={handleCityChange}
                      className={`form-control ${errors.selectcity ? 'is-invalid' : ''}`}
                      disabled={!selectedState}
                    >
                      <option value="">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Select>
                    {errors.selectcity && <div className="invalid-feedback">{errors.selectcity}</div>}
                  </Col>
                </Row>
                <button
                  type="submit"
                  className="becamesubmit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </Col>
            </Row>
          </form>
        </Container>
      </section>

      <>
        <section className="online-dsa-registration">
          <div className="container">
            <h3>Online DSA Registration with Navmi Finserrv</h3>
            <p>
              Embark on a rewarding career as a Direct Sales Agent (DSA) with Navmi
              Finserrv! Our Online DSA Registration process opens the door to a world
              of opportunities in the financial sector. As India’s leading loan
              distributor, we offer an extensive range of financial products,
              including Home Loans, Business Loans, Personal Loans, Loans Against
              Property, Car Loans, Professional Loans, Construction Loans, Working
              Capital, and Balance Transfer.
            </p>
            <p>
              With 15 years of experience and a proven track record, Navmi Finserrv
              provides a seamless and efficient onboarding process, ensuring you’re
              ready to hit the ground running. You’ll also have access to advanced
              tools such as our EMI Calculator to assist you in delivering the best
              financial solutions to your clients.
            </p>
            <p>
              Join us in our mission to help over 4 million clients make intelligent
              financial decisions, and enjoy the benefits of attractive commissions as
              you grow in your career. Start your journey today and be a part of a
              dynamic team that’s shaping the future of finance
            </p>
          </div>
        </section>
        <section className="online-dsa-registration">
          <div className="container">
            <h3>Who is a DSA?</h3>
            <p>
              A DSA (Direct Sales Agent) is an individual or business entity that
              serves as an intermediary between financial institutions, such as banks
              and NBFCs, and potential customers. They help customers access a variety
              of financial products like loans, insurance, and credit cards. DSAs
              operate on a commission-based model, earning fees or commissions for
              each successful sale or referral they generate.
            </p>
            <div className="skdllkdl row">
              <div className="col-lg-5">
                <img className="w-100" src={dasas} alt="" />
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="whoisdsa_whoisdsa">
                      <h5>Identifying Potential Customers</h5>
                      <h6>
                        Searching and connecting with the individuals who need
                        financial services and others.
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="whoisdsa_whoisdsa">
                      <h5>Guiding Borrowers</h5>
                      <h6>
                        Educate customers on the merits of co-curricular activities
                        and how to apply for a loan.
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="whoisdsa_whoisdsa">
                      <h5>Ensuring Documentation</h5>
                      <h6>
                        Ensuring the accuracy and availability of all necessary
                        paperwork.
                      </h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="whoisdsa_whoisdsa">
                      <h5>Closing Deals</h5>
                      <h6>
                        Connect borrowers with lenders and finalize transactions.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="online-dsa-registration">
          <div className="container">
            <h3>Documents Required for DSA Registration</h3>
            <p>
              To become a Loan Agent with Navmi Finserrv, you must submit a soft copy
              of your phone number and PAN card for individuals or GST for firms at
              the time of registration.
            </p>
            <div className="row">
              <div className="col-lg-3">
                <div className="documentsrequired">
                  <div className="">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/contact-number-icon.png"
                      alt="Contact Number"
                    />
                  </div>
                  <p>Contact Number</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="documentsrequired">
                  <div className="">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/pan-card-icon.png"
                      alt="Contact Number"
                    />
                  </div>
                  <p>PAN Card</p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="documentsrequired">
                  <div className="">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/gst-doc-icon.png"
                      alt="Contact Number"
                    />
                  </div>
                  <p>GST Doc. (for Firms)</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="creditandloan">
          <div>
            <div className="maincom text-center mb-5">
              <h2>Become a Partner with Navmi Finserrv!</h2>
            </div>
            <div className="container">
              <p className="become-para">
                Enhance your professional journey and elevate your entrepreneurial
                ambitions by partnering with Navmi Finserrv! Whether you're a seasoned
                professional or someone eager to break into the world of finance, we
                welcome individuals with strong interpersonal skills and a relentless
                passion for success. As a partner, you'll have the opportunity to
                collaborate with a trusted channel partner of over 40+ banks and
                NBFCs, unlocking new growth avenues. So, if you're ready to fire up
                your entrepreneurial instincts and drive your career to new heights,
                join Team Navmi Finserrv today and embark on a rewarding journey to
                victory!
              </p>
              <div className="loans-dsaaa">
                <div className="partnerWithnavmifinv">
                  <div className="partnerWithnavmifinv__3J51T">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/shared/images/become-a-partner/loan-agent-icon.webp"
                      className="partnerWithnavmifinv_logo"
                    />
                    <p>Loan Agent</p>
                  </div>
                </div>
                <div className="partnerWithnavmifinv">
                  <div className="partnerWithnavmifinv__3J51T">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/ex-banker-icon.png"
                      className="partnerWithnavmifinv_logo"
                    />
                    <p>Ex-Banker</p>
                  </div>
                </div>
                <div className="partnerWithnavmifinv">
                  <div className="partnerWithnavmifinv__3J51T">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/financial-analyst-icon.png"
                      className="partnerWithnavmifinv_logo"
                    />
                    <p>Financial Analyst</p>
                  </div>
                </div>
                <div className="partnerWithnavmifinv">
                  <div className="partnerWithnavmifinv__3J51T">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/mutual-fund-agent-icon.png"
                      className="partnerWithnavmifinv_logo"
                    />
                    <p>Mutual Fund Agent</p>
                  </div>
                </div>
                <div className="partnerWithnavmifinv">
                  <div className="partnerWithnavmifinv__3J51T">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/chartered-accountant-icon.png"
                      className="partnerWithnavmifinv_logo"
                    />
                    <p>Chartered Accountant</p>
                  </div>
                </div>
                <div className="partnerWithnavmifinv">
                  <div className="partnerWithnavmifinv__3J51T">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/shared/images/become-a-partner/builder-icon.webp"
                      className="partnerWithnavmifinv_logo"
                    />
                    <p>Builder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="eligibility_cretria">
          <div className="container">
            <h3>
              What Are the Eligibility Criteria for The Navmi Finserrv DSA
              Registration Process?
            </h3>
            <p>
              Navmi Finserrv has partnerships with more than 40+ leading Banks and
              NBFCs to offer loans. Navmi Finserrv includes Personal Loans, Business
              Loans, Home Loans, Loans against Property or Mortgage Loans, Car loans,
              Credit reports, and more. The eligibility criteria to operate as a Loan
              DSA Partner or Loan DSA Franchise are as follows:
            </p>
            <div className="row">
              <div className="col-lg-3">
                <div className="documentsrequired one">
                  <div className="">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/eligibility-age-icon.png"
                      alt="Contact Number"
                    />
                  </div>
                  <p>Age</p>
                  <h2>You must be over 25 years of age.</h2>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="documentsrequired one">
                  <div className="">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/become-a-partner/eligibility-nationality-icon.png"
                      alt="Contact Number"
                    />
                  </div>
                  <p>Nationality</p>
                  <h2>You must be a Resident Citizen of India</h2>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="documentsrequired one">
                  <div className="">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/shared/images/become-a-partner/eligibility-educational-qualifications-icon.webp"
                      alt="Contact Number"
                    />
                  </div>
                  <p>Educational Qualifications</p>
                  <h2>
                    There are no educational requirements to qualify as a Navmi
                    Finserrv Loan DSA Partner
                  </h2>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="documentsrequired one">
                  <div className="">
                    <img
                      src="https://ruloans-bucket.s3.amazonaws.com/b2c/shared/images/become-a-partner/eligibility-professional-qualifications-icon.webp"
                      alt="Contact Number"
                    />
                  </div>
                  <p>Professional Qualifications</p>
                  <h2>
                    Whether you are a working professional, or a business owner, you
                    are welcome to register as a Navmi Finserrv Loan DSA Franchise
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="creditandloan">
          <div>
            <div className="maincom text-center mb-5">
              <h2>Why Partner with Navmi Finserrv? - Benefits and Perks</h2>
            </div>
            <div className="container">
              <p>
                Partnering with Navmi Finserrv gives you the tools, support, and
                opportunities to grow in the financial services industry while
                enjoying significant rewards. Start your journey today and unlock your
                potential!
              </p>
              <div
                className="mb-4 mt-5 row"
                style={{ justifyContent: "space-evenly" }}
              >
                <div className="col-lg-4">
                  <div className="whoisdsa_whoisdsa">
                    <h5>Wide Range of Financial Products</h5>
                    <h6>
                      Navmi Finserrv partners with over 40+ leading banks and NBFCs,
                      giving you access to a diverse range of loan products, including
                      Home Loans, Business Loans, Personal Loans, Car Loans, and more,
                      allowing you to meet the unique needs of clients.
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="whoisdsa_whoisdsa">
                    <h5>Attractive Commissions</h5>
                    <h6>
                      Earn competitive and lucrative commissions on each successful
                      loan transaction, with the potential for unlimited earnings
                      based on your performance.
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="whoisdsa_whoisdsa">
                    <h5>Seamless Onboarding Process</h5>
                    <h6>
                      The simple and smooth registration process, combined with
                      comprehensive training, ensures you are well-equipped to begin
                      your journey with confidence.
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="whoisdsa_whoisdsa">
                    <h5>Advanced Sales Tools</h5>
                    <h6>
                      Gain access to advanced tools like the EMI Calculator, loan
                      calculators, and a user-friendly dashboard to track leads,
                      sales, and commissions, helping you serve clients efficiently.
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="whoisdsa_whoisdsa">
                    <h5>Proven Support System</h5>
                    <h6>
                      With over 15 years of experience, Navmi Finserrv offers
                      continuous support, guidance, and marketing resources to help
                      you succeed as a DSA Partner or Franchise.
                    </h6>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="whoisdsa_whoisdsa">
                    <h5>Build Your Own Business</h5>
                    <h6>
                      Enjoy the flexibility of being your own boss, operating
                      independently, and building your own customer base while
                      benefiting from Navmi Finserrv’s brand reputation and resources.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sasas">
          <div>
            <div className="container">
              <h3 className="faqlkk">FAQs</h3>
              <div className="Newfaqs col-lg-12">
                <div className="accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        type="button"
                        aria-expanded="true"
                        className="accordion-button"
                      >
                        1. Can I get an in-principle approval and actually avail of
                        the loan later?
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        Yes you can get in-principle and avail it within 90 days.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        type="button"
                        aria-expanded="false"
                        className="accordion-button collapsed"
                      >
                        2. How long is this approval valid?
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Approval is valid for 90 days.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        type="button"
                        aria-expanded="false"
                        className="accordion-button collapsed"
                      >
                        3. What are the documents required?
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Photo, Pan Card, current residence proof and income proof.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

    </div>
  );
};

export default BecamePartner;