import CreditReport from "../Component/Dashboard/CreditReport";
import Notifications from "../Component/Dashboard/Notifications";
import LoanOffers from "../Component/Dashboard/LoanOffers";
import UserProfile from "../Component/Dashboard/UserProfile";
import BlogDetails from "../Component/Home/BlogDetails";
import Introduction from "../Component/Loans/Personalloans/Introduction";
import AboutUs from "../Pages/AboutUs";
import BecamePartner from "../Pages/BecamePartner";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import Faqs from "../Pages/Faqs";
import Homepage from "../Pages/Homepage";
import Joinus from "../Pages/JoinUs";
import RepaymentSchedule from "../Pages/RepaymentSchedule";
import Salaried from "../Pages/Salaried";
import SelfEmployed from "../Pages/SelfEmployed";
import Usersupport from "../Component/Dashboard/Usersupport";
import Homeloan from "../Component/Loans/Homeloan/Homeloan";
import Businessloan from "../Component/Loans/Businessloan/Businessloan";
import Carloan from "../Component/Loans/Carloan/Carloan";
import Loanagainstproperty from "../Component/Loans/Loanagainstproperty/Loanagainstproperty";
import Constructionloan from "../Component/Loans/Constructionloan/Constructionloan";
import Professionalloan from "../Component/Loans/Professionalloan/Professionalloan";
import Balancetransfer from "../Component/Loans/Balancetransfer/Balancetransfer";
import Workingcapital from "../Component/Loans/Workingcapital/Workingcapital";
import Cgtmse from "../Component/Loans/Cgtmse/Cgtmse";
import Lifeinsurance from "../Component/Insurance/Lifeinsurance/Lifeinsurance";
import Healthinsurance from "../Component/Insurance/Healthinsurance/Healthinsurance";
import LoanComparision from "../Pages/Calculator/Loancomparision";
import Tenurecalculator from "../Pages/Calculator/Tenurecalculator";
import Roicalculator from "../Pages/Calculator/Roicalculator";
import PrincipalCalculator from "../Pages/Calculator/Principalcalculator";
import Emicalculator from "../Pages/Calculator/Emicalculator";
import RevisedEMICalculator from "../Pages/Calculator/Revised-emi-tenure";
import Emicalculatorlist from "../Pages/Emi-calculator-list";
import Privacypolicy from "../Pages/Privacypolicy";

export const routes = [
  {
    path: "/",
    exact: true,
    element: <Homepage />,
  },
  {
    path: "/personal-loan",
    exact: true,
    element: <Introduction />,
  },
  {
    path:"/home-loan",
    exact:true,
    element:<Homeloan/>
  },
  {
    path:"/business-loan",
    exact:true,
    element:<Businessloan/>
  },
  {
    path:"/car-loan",
    exact:true,
    element:<Carloan/>
  },
  {
    path:"/loan-against-property",
    exact:true,
    element:<Loanagainstproperty/>
  },
  {
    path:"/construction-loan",
    exact:true,
    element:<Constructionloan/>
  },
  {
    path:"/professional-loan",
    exact:true,
    element:<Professionalloan/>
  },
  {
    path:"/balance-transfer",
    exact:true,
    element:<Balancetransfer/>
  },
  {
    path:"/working-capital",
    exact:true,
    element:<Workingcapital/>
  },
  {
    path:"/cgtmse",
    exact:true,
    element:<Cgtmse/>
  },
  {
    path:"/lifeinsurance",
    exact:true,
    element:<Lifeinsurance/>
  },
  {
    path:"/healthinsurance",
    exact:true,
    element:<Healthinsurance/>
  },
  {
    path: "/blogs",
    exact: true,
    element: <Blogs />,
  },
  {
    path: "/occupation-salaried",
    exact: true,
    element: <Salaried />,
  },
  {
    path: "/occupation-self-employed",
    exact: true,
    element: <SelfEmployed />,
  },
  {
    path: "/faqs",
    exact: true,
    element: <Faqs />,
  },
  {
    path: "/blog-details",
    exact: true,
    element: <BlogDetails />,
  },
  {
    path: "/contact-us",
    exact: true,
    element: <ContactUs />,
  },
  {
    path: "join-us",
    exact: true,
    element: <Joinus />,
  },
  {
    path: "repayment-schedule",
    exact: true,
    element: <RepaymentSchedule />,
  },
  // {
  //   path: "emi-calculator",
  //   exact: true,
  //   element: <EmiCalculator />,
  // },
  {
    path: "became-a-partner",
    exact: true,
    element: <BecamePartner />,
  },
  {
    path: "about-us",
    exact: true,
    element: <AboutUs />,
  },
  {
    path: "user-profile",
    exact: true,
    element: <UserProfile />,
  },
  {
    path: "loan-offers",
    exact: true,
    element: <LoanOffers />,
  },
  {
    path: "notifications",
    exact: true,
    element: <Notifications />,
  },
  {
    path: "credit-report",
    exact: true,
    element: <CreditReport />,
  },
  {
    path: "user-support",
    exact: true,
    element: <Usersupport />,
  },
  {
    path: "/loan-comparision",
    exact: true,
    element: <LoanComparision />,
  },
  {
    path: "/tenure-calculator",
    exact: true,
    element: <Tenurecalculator />,
  },
  {
    path: "/roi-calculator",
    exact: true,
    element: <Roicalculator />,
  },
  {
    path: "/principal-calculator",
    exact: true,
    element: <PrincipalCalculator />,
  },
  {
    path: "/emi-calculator",
    exact: true,
    element: <Emicalculator />,
  },
  {
    path: "/revised-emi-calculator",
    exact: true,
    element: <RevisedEMICalculator />,
  },
  {
    path: "/emi-calculator-list",
    exact: true,
    element: <Emicalculatorlist />,
  },
  {
    path: "/privacy-policy",
    exact: true,
    element: <Privacypolicy />,
  },
];
