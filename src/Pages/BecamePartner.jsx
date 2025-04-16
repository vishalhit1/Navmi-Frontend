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
    middlename: "",
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

     // First Name validation
     if (!formData.middlename) {
      tempErrors.middlename = "Middle Name is required";
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
      middlename: "",
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
                    <label>Middle Name</label>
                    <input
                      type="text"
                      name="middlename"
                      value={formData.middlename}
                      onChange={handleInputChange}
                      className={`form-control ${errors.middlename ? 'is-invalid' : ''}`}
                      placeholder="Your Middle Name"
                    />
                    {errors.middlename && <div className="invalid-feedback">{errors.middlename}</div>}
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

      {/* Rest of the sections remain the same */}
      <section className="online-dsa-registration">
        <Container>
          <h3>Online DSA Registration with Navmi Finserrv</h3>
          <p>
            Embark on a rewarding career as a Direct Sales Agent (DSA) with Navmi Finserrv! Our Online DSA Registration process opens the door to a world of opportunities in the financial sector. As India's leading loan distributor, we offer an extensive range of financial products, including Home Loans, Business Loans, Personal Loans, Loans Against Property, Car Loans, Professional Loans, Construction Loans, Working Capital, and Balance Transfer.
          </p>
          {/* Rest of this section content */}
        </Container>
      </section>

      {/* Additional sections continue here */}
    </div>
  );
};

export default BecamePartner;