export interface CookieBannerData {
    message: string;
    acceptAllText: string;
    managePreferencesText: string;
    privacyPolicyText: string;
    privacyPolicyUrl: string;
}

export const cookieBannerData = {
  message:
    "We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking 'Accept All', you consent to our use of cookies.",
  acceptAllText: "Accept All",
  managePreferencesText: "Manage Preferences",
  privacyPolicyText: "Privacy Policy",
  privacyPolicyUrl: "/privacy-policy",
};