import email from "@/assets/icons/email.png";
import home from "@/assets/icons/home.png";
import location from "@/assets/icons/location.png";
import lock from "@/assets/icons/lock.png";
import out from "@/assets/icons/out.png";
import person from "@/assets/icons/person.png";
import profile from "@/assets/icons/profile.png";
import search from "@/assets/icons/search.png";
import facility from "@/assets/images/facility.png";
import masmLogo from "@/assets/images/masm.png";
import noResult from "@/assets/images/no-result.png";
import onboarding1 from "@/assets/images/onboarding1.png";
import onboarding2 from "@/assets/images/onboarding2.png";
import onboarding3 from "@/assets/images/onboarding3.png";
import profileHolder from "@/assets/images/profile.png";

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
  noResult,
  masmLogo,
  facility,
  profileHolder,
};

export const colors = {
  primary: "#007BFF",
};

export const icons = {
  email,
  lock,
  person,
  home,
  profile,
  out,
  search,
  location,
};

export const onboarding = [
  {
    id: 1,
    title: "Emergency help, just a tap away!",
    description:
      "With Mz-HEARS, request urgent medical assistance instantly with real-time GPS tracking.",
    image: images.onboarding1,
  },
  {
    id: 2,
    title: "Faster response. Better care.",
    description:
      "Our system connects you to nearby clinics and dispatches help in seconds—because every second matters.",
    image: images.onboarding2,
  },
  {
    id: 3,
    title: "Empowering healthcare through technology",
    description:
      "Mz-HEARS improves emergency response, coordination, and decision-making through data and innovation.",
    image: images.onboarding3,
  },
];

export const data = {
  onboarding,
};

export const facilityIcons = [
  { name: "Services", icon: "medical-services" },
  { name: "Joined", icon: "calendar-month" },
  { name: "Responders", icon: "people-alt" },
];

export const emergencyFormFields = [{ label: "Location" }];
