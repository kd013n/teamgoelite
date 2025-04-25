"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Link from "next/link";

const files = [
  {
    filename: "AXA Comprehensive Car Insurance Brochure",
    link: "https://drive.google.com/file/d/113JYLfiDqqBl7LvgFe9ONjjXQoQcvwnE/view?usp=drive_link",
  },
  {
    filename: "AXA Condo Security Brochure",
    link: "https://drive.google.com/file/d/1YjEn9r1_qHnxZg3SycM70u1p5nFzfcRm/view?usp=drive_link",
  },
  {
    filename: "AXA Home Security Brochure",
    link: "https://drive.google.com/file/d/1APNX3wUUC6g8kaSdxfacVE8ZHo86jWce/view?usp=drive_link",
  },
  {
    filename: "AXA Smart Traveller Brochure",
    link: "https://drive.google.com/file/d/15mKqMHlK5xgp70tP8LNyRwz_USr3wU7u/view?usp=drive_link",
  },
  {
    filename: "HCA Brochure",
    link: "https://drive.google.com/file/d/1H2DWYFMuriHT53JYH-AIxuVI8RkcxmJl/view?usp=drive_link",
  },
  {
    filename: "My Security Brochure",
    link: "https://drive.google.com/file/d/1XuQ5qZVa1FAbgsuePLRYYPSFTH87-fUK/view?usp=drive_link",
  },
  {
    filename: "Academix Brochure",
    link: "https://drive.google.com/file/d/1AuvIle2INlq5qCFB3yK3tM3ZwmF-pj2h/view?usp=drive_link",
  },
  {
    filename: "Asset Master (Estate Planning) Brochure",
    link: "https://drive.google.com/file/d/1lj_q8BZQl_jnR-ZVb2VGO_e-ij4HBPs0/view?usp=drive_link",
  },
  {
    filename: "Asset Master (Keyman) Brochure",
    link: "https://drive.google.com/file/d/1Mt7magLbv8g5Q-0t3ao_txnYvjizGg5G/view?usp=drive_link",
  },
  {
    filename: "Axelerator Brochure",
    link: "https://drive.google.com/file/d/1zsP_zPh0caITS0A0toIPmXI5OUFbGiz_/view?usp=drive_link",
  },
  {
    filename: "FlexiProtect + Care or Critical Conditions Rider Brochure",
    link: "https://drive.google.com/file/d/1HkJHMikNsTzNIHpHji0X-aLDijuqUUAM/view?usp=drive_link",
  },
  {
    filename: "Global Health Access Brochure",
    link: "https://drive.google.com/file/d/1OHTfyF2WeO7lhepsqGEF8SM1Q9W6tNYl/view?usp=drive_link",
  },
  {
    filename: "HealthMax Brochure",
    link: "https://drive.google.com/file/d/11l1Iv473SYj5QNKoAVZHBJ2E9Pe1sHGN/view?usp=drive_link",
  },
  {
    filename: "Health Start Brochure",
    link: "https://drive.google.com/file/d/115w6uN_kT1gvhXjlHrqTl4hK-E-ZcXA_/view?usp=drive_link",
  },
  {
    filename: "LifeBasiX Brochure",
    link: "https://drive.google.com/file/d/1euTXHrDnm5eCx79VZOoShWMyH7Gdn1N3/view?usp=drive_link",
  },
  {
    filename: "Retire Smart Brochure",
    link: "https://drive.google.com/file/d/1y0e6BV8anaOA2Wi82SkBeWIpEjN_DM44/view?usp=drive_link",
  },
  {
    filename: "SME Employee ProteXion SMEX Brochure",
    link: "https://drive.google.com/file/d/1jHU0n0uc1kJzDRVP-hpnMO3PhQxJH0vc/view?usp=drive_link",
  },
  {
    filename: "SME Secure Brochure",
    link: "https://drive.google.com/file/d/10Z3LQixKSoKYJYGbiPaYDNgtstXqy9Tb/view?usp=drive_link",
  },
  {
    filename: "MLC Education Brochure",
    link: "https://drive.google.com/file/d/1nIYPTgofsCHsWyu1tOTBqvYvbSXjRNHr/view?usp=drive_link",
  },
  {
    filename: "MLC Goal Brochure",
    link: "https://drive.google.com/file/d/13J8IhZ6mmxBaFGhAvYXi1CR9ng5_H8Tx/view?usp=drive_link",
  },
  {
    filename: "MLC Health Brochure",
    link: "https://drive.google.com/file/d/1W80Q1olaPXtvSNhenuWoGYh1oRyhVFvn/view?usp=drive_link",
  },
  {
    filename: "MLC Protect Brochure",
    link: "https://drive.google.com/file/d/16Vp3KEAhewI_EfLd4sRhywad8S8-RR4d/view?usp=drive_link",
  },
  {
    filename: "My Life Choice Brochure",
    link: "https://drive.google.com/file/d/1r7Xdogi959NpSDazR5IUnGAw--R5XkVS/view?usp=drive_link",
  },
  {
    filename: "2022 DREAM MAP FILLABLE V0",
    link: "https://drive.google.com/file/d/1inDO6wVrycXieJcMYi4JGFxaDuT2-kPr/view?usp=drive_link",
  },
  {
    filename: "2022 DREAM MAP FILLABLE",
    link: "https://drive.google.com/file/d/1O6RZNdwGpiGmPz-zO_ZVo9yvuWQqgm_K/view?usp=drive_link",
  },
  {
    filename: "2022 SUMMARY OF FINANCIAL NEEDS V0_1653445787",
    link: "https://drive.google.com/file/d/1zjYac-OXD8jeiRnRTqWWPyxYLmkZi-r7/view?usp=drive_link",
  },
  {
    filename: "2022 SUMMARY OF FINANCIAL NEEDS V0",
    link: "https://drive.google.com/file/d/1Lt6ktyNyaX07b1tWVgh1-KNo2ROPFHix/view?usp=drive_link",
  },
  {
    filename: "Application for General Insurance",
    link: "https://drive.google.com/file/d/1o3Q5ScwhNDR9k7X_uyPotov-divEJMn6/view?usp=drive_link",
  },
  {
    filename: "Application Form for Smart Traveller",
    link: "https://drive.google.com/file/d/12-3cgsaZVdGsEcDmFI5w65GwrDdbgJVE/view?usp=drive_link",
  },
  {
    filename: "Car Insurance poster",
    link: "https://drive.google.com/file/d/1LIrccuCcuELBNeLqhDneVGrq5hEfnbSg/view?usp=drive_link",
  },
  {
    filename: "FIRE - Property Fire Application Form",
    link: "https://drive.google.com/file/d/1FwpoZmLQklaC0irwZakAvbCh9wzMoRG_/view?usp=drive_link",
  },
  {
    filename: "FOSS Product Sheet",
    link: "FOSS Product Sheet.jpeg",
  },
  {
    filename: "KYC Motor Car Application Form",
    link: "KYC Motor Car Application Form.pdf",
  },
  {
    filename: "MARINE Application Form",
    link: "MARINE Application Form.pdf",
  },
  {
    filename: "Smart Traveller 1 pager 2",
    link: "Smart Traveller 1 pager 2.jpeg",
  },
  {
    filename: "Smart Traveller 1 pager",
    link: "Smart Traveller 1 pager.jpeg",
  },
  {
    filename: "Smart Traveller Benefits",
    link: "Smart Traveller Benefits.jpeg",
  },
  {
    filename: "Smart Traveller FAQs",
    link: "https://drive.google.com/file/d/1CUf2o_NPsJlYgGquWbPBGRUEwWS--Fzu/view?usp=drive_link",
  },
  {
    filename: "Smart Traveller poster",
    link: "https://drive.google.com/file/d/1oapSQ5AbKbuQmB5ZBzDDxPSLVl3ygEYu/view?usp=drive_link",
  },
  {
    filename: "Travel-PA-Claim-Form",
    link: "https://drive.google.com/file/d/11fRq7AQ69qSurliesyk_VB8570B_C82G/view?usp=drive_link",
  },
  {
    filename: "Asset Protect Poster",
    link: "https://drive.google.com/file/d/1vs5-PJkOOnCqXhuTihG_V8pwWnyOx715/view?usp=drive_link",
  },
  {
    filename: "Asset Protect Brochure",
    link: "https://drive.google.com/file/d/16w-AA4ZS3h5-GQiLux5wCFN-ootEVLI4/view?usp=drive_link",
  },
  {
    filename: "GHA Aid to Selling Tool",
    link: "https://drive.google.com/open?id=1Mt7Jrwy7IFf9yqIr2JsC4PMfYhvB534K&usp=drive_copy",
  },
  {
    filename: "GHA Client Presentation Deck",
    link: "https://drive.google.com/open?id=1etiZdihCQjQrc38Ch_11EcLY7-C8fEZG&usp=drive_copy",
  },
  {
    filename: "GHA Competitive-Scan",
    link: "https://drive.google.com/open?id=1wF5hdMaZBX99VINr5GhJAPdJUvRODaG_&usp=drive_copy",
  },
  {
    filename: "GHA Healthful Facts Infographic",
    link: "https://drive.google.com/open?id=1Lv76y1dwp4ERZJjoAEyQ9S5lxIW80nMU&usp=drive_copy",
  },
  {
    filename: "HCA Brochure",
    link: "https://drive.google.com/open?id=1tPQfjHpRqs-Vv8eTZFMy_AQLNm2wobvi&usp=drive_copy",
  },
  {
    filename: "HCA-Client-Presentation-Deck-as-of-07292021-FINAL",
    link: "https://drive.google.com/open?id=1l7iItUPMb3cJg9KFfMgN0Hz-dT84In7o&usp=drive_copy",
  },
  {
    filename: "Health Max Aid to Selling (One Pager)",
    link: "https://drive.google.com/open?id=1HyVAQZdUuGWKrLrOvlYL2kwD0yKNwyAe&usp=drive_copy",
  },
  {
    filename: "Health-Start-Selling-Aid",
    link: "https://drive.google.com/open?id=1e0A-BJsRkndskt1sSL2yIUrWerbtCJxn&usp=drive_copy",
  },
  {
    filename: "Asset Master Client Presentation Deck",
    link: "https://drive.google.com/open?id=1dwDTCdHeq6y9pFBPfFGmoZ8_imK-8VQ4&usp=drive_copy",
  },
  {
    filename: "Product Highlight Sheet-Asset Master",
    link: "https://drive.google.com/open?id=19f7eF4ZOhzvPmZWMqN--VkrTnJoyD1ma&usp=drive_copy",
  },
  {
    filename: "Product Highlight Sheet-Life Basix",
    link: "https://drive.google.com/open?id=1mv2l3hKjYezmqeADy3W0W21qGvvuXgQL&usp=drive_copy",
  },
  {
    filename: "MLC One Pager",
    link: "https://drive.google.com/open?id=1zNUjyAbrQHe9EsoFhqfBOoX6tX6IXE7a&usp=drive_copy",
  },
  {
    filename: "Underwriting Guidebook 2020 V6.1 - Distributors Copy",
    link: "https://drive.google.com/open?id=1FWU8x9Hl5gpj4y375-93F0PyP53qzxNh&usp=drive_copy",
  },
  {
    filename: "BDO ADA Enrollment Form",
    link: "https://drive.google.com/open?id=1xBzEmRH8zot5J7muODK3QYyXtkQiWDKB&usp=drive_copy",
  },
  {
    filename: "BPI ADA FORM",
    link: "https://drive.google.com/open?id=1kpfTm87Cl5YStPOAXjFN5_E53sQlMp4P&usp=drive_copy",
  },
  {
    filename: "ChinaBank ADA FORM Updated",
    link: "https://drive.google.com/open?id=12RWg3xwFEOIo-hXpBn1xyEU4Q0WDGKdi&usp=drive_copy",
  },
  {
    filename: "Metrobank ADA FORM",
    link: "https://drive.google.com/open?id=1H7S_cfXURnfs-xfsK8gDsTvHhDMJqfcB&usp=drive_copy",
  },
  {
    filename: "PNB ADA FORM",
    link: "https://drive.google.com/open?id=1HgnK9vBFR32dLqD9GbCC78SHSstVf6ID&usp=drive_copy",
  },
  {
    filename: "PSBank ADA FORM",
    link: "https://drive.google.com/open?id=1p1p_7AVOqUbOzV3TuNHqiVuf_Fpta-kR&usp=drive_copy",
  },
  {
    filename:
      "Application Form for Global Health Access (Digital Final)-11.28.19_RP[6]... (1)",
    link: "https://drive.google.com/open?id=1hM0GXr-mdd4klhlVv_nENktR__3Bk_0-&usp=drive_copy",
  },
  {
    filename: "Client Information Sheet",
    link: "https://drive.google.com/open?id=1_67GQB9mFW0jFvMRCmmAzdaaDMkTAvi_&usp=drive_copy",
  },
  {
    filename: "Client's Declaration Form",
    link: "https://drive.google.com/open?id=1FLpMSrrLhUHC4t6J4smVQhXo4G8rczD9&usp=drive_copy",
  },
  {
    filename: "Customary Signature Certificate",
    link: "https://drive.google.com/open?id=10F_MeYHgwco4CMu_CkufpCBl4rgv-pUj&usp=drive_copy",
  },
  {
    filename: "Customer ID and Signature Verification",
    link: "https://drive.google.com/open?id=1-tRTufr-kDi9jnVz4h_f5t3k4NXHKGN9&usp=drive_copy",
  },
  {
    filename: "DIRECT-CREDIT-TO-BANK-ACCOUNT",
    link: "https://drive.google.com/open?id=1EcGjbjqDq_7gVV1NJaXld2WMPXg8FVLq&usp=drive_copy",
  },
  {
    filename: "Reimbursement Request Form",
    link: "https://drive.google.com/open?id=13tg41kCBDC7dVMA9pH93MviHJsdSLp0l&usp=drive_copy",
  },
  {
    filename: "marine",
    link: "https://drive.google.com/open?id=1YoaB2s5d0Sr-pZKV24thXGD-DyZiWiUK&usp=drive_copy",
  },
  {
    filename: "amendment+to+application",
    link: "https://drive.google.com/open?id=1jrYamlrJHbHvlfBWElBmUWrpyk95etHm&usp=drive_copy",
  },
  {
    filename: "application+for+bond_03272019+v2",
    link: "https://drive.google.com/open?id=1N4RnK6rPHDQm6FwEx3Ycyi3cSNEbfkqK&usp=drive_copy",
  },
  {
    filename: "motor",
    link: "https://drive.google.com/open?id=1qfIOeWfN_X0gWjM1emeQ4UhJ6_sKhYcm&usp=drive_copy",
  },
  {
    filename: "new business pre-submission checklist",
    link: "https://drive.google.com/open?id=1kbfBV7ldCN6e4jcMHcUBOlH3KX9_zfcT&usp=drive_copy",
  },
  {
    filename: "policy replacement notification form",
    link: "https://drive.google.com/open?id=1BnhQbeVivHLfPWwVm8Umbghf_dlrETWL&usp=drive_copy",
  },
  {
    filename: "property",
    link: "https://drive.google.com/open?id=1Hjv4HRmbg620BjMipFzl1Z12dPyKFKI-&usp=drive_copy",
  },
  {
    filename: "Operations TAT Reference - Customer Copy",
    link: "https://drive.google.com/open?id=1mbxI66f5AqhWQpLe5m6hvBIgYBFQkdm8&usp=drive_copy",
  },
  {
    filename: "death claim form (physician)",
    link: "https://drive.google.com/open?id=1Mj-hdGYZVMHcu9alw6zKWPQiD7hiJb5I&usp=drive_copy",
  },
  {
    filename: "Claim Report Form - Fire",
    link: "https://drive.google.com/open?id=11Bw7UJPGD10B9rpGmUOyV86_zGPii3k4&usp=drive_copy",
  },
  {
    filename: "critical illness claim form (claimant)",
    link: "https://drive.google.com/open?id=14pJddnC-Dok1p-DiVmx-8sPwt2877rW1&usp=drive_copy",
  },
  {
    filename: "critical illness claim form (physician)",
    link: "https://drive.google.com/open?id=1mPUTkQwq8vgrLrt9jVsOS-WQo_iLovWi&usp=drive_copy",
  },
  {
    filename: "death claim form (claimant)",
    link: "https://drive.google.com/open?id=17USF1_C17igEMLP0LPWgUZKogPEFGrVV&usp=drive_copy",
  },
  {
    filename: "disability claim form (physician)",
    link: "https://drive.google.com/open?id=1xUYQYz66RK0KEuDS8L9rCCIpEAZ8vgvf&usp=drive_copy",
  },
  {
    filename: "gha-reimbursement form",
    link: "https://drive.google.com/open?id=1bq9k5mICUG8d4atQpBnGRFMn61zpwERo&usp=drive_copy",
  },
  {
    filename: "Health Claim Reimbursement Form",
    link: "https://drive.google.com/open?id=1-0MmShkWqGpNvdt3rklbvXQH5zMBCirO&usp=drive_copy",
  },
  {
    filename: "hospitalization claim form (claimant) (1)",
    link: "https://drive.google.com/open?id=1VFmyrqFNiVvy3fgVuxr7pssRktN2_WJo&usp=drive_copy",
  },
  {
    filename: "medical indemnity claim form (physician)",
    link: "https://drive.google.com/open?id=1-Ba9vyevl7avjHIpStrvshAumyIShrQ2&usp=drive_copy",
  },
  {
    filename: "motor vehicle accident report form - motor car",
    link: "https://drive.google.com/open?id=17pbStIGspgcacM8WvhVdBSPMF-a7M-IO&usp=drive_copy",
  },
  {
    filename: "non-waiver agreement property line",
    link: "https://drive.google.com/open?id=1SwQbC-HgwCTJFXBlWWKUje3M2q-m3aeM&usp=drive_copy",
  },
  {
    filename: "personal accident insurance claim form",
    link: "https://drive.google.com/open?id=1a2O1TnIQpiBlU155uqf60s7KjtWfr0V7&usp=drive_copy",
  },
  {
    filename:
      "quick guide for claims requirements for the most common critical conditions",
    link: "https://drive.google.com/open?id=1e8UNwzKM1SRgk1XSONBHYnb2PETz3djb&usp=drive_copy",
  },
  {
    filename: "cancellation and replacement of checks form",
    link: "https://drive.google.com/open?id=1Jkg3P9NIXFUSPKRbKJZjjMOCYEGdMFpC&usp=drive_copy",
  },
  {
    filename: "certificate of customary signature",
    link: "https://drive.google.com/open?id=1et-9vGZNQJNuaCl4qoox0U5q1T6hXlBP&usp=drive_copy",
  },
  {
    filename: "customer inquiry form (1)",
    link: "https://drive.google.com/open?id=1NZIOI4IsoZK7i7a9vSKMJKRkC9OadYlV&usp=drive_copy",
  },
  {
    filename: "customer inquiry form",
    link: "https://drive.google.com/open?id=1e7FcxwzBrdKkknLAR2Msb49FAixf-7jB&usp=drive_copy",
  },
  {
    filename: "declaration of lost policy and reissue request form",
    link: "https://drive.google.com/open?id=18_MlY_bN7-k96dE9Cr3T8wz6uCVfvDZr&usp=drive_copy",
  },
  {
    filename: "large amount questionnaire",
    link: "https://drive.google.com/open?id=1b07K1dwqoiQhIVVKidjB_MrETiYb5Nke&usp=drive_copy",
  },
  {
    filename: "Plan Transparency Declaration Form PTDF_20220923_Approved",
    link: "https://drive.google.com/open?id=1kd8Gz_AZdd-Jc1UFUyMv2nNsoS-L5wgK&usp=drive_copy",
  },
  {
    filename: "release waiver and quit claim form",
    link: "https://drive.google.com/open?id=1cJkn53F3lzlmTssXjYJv25Oz-L_BMEQZ&usp=drive_copy",
  },
  {
    filename: "SAM FAQs for Distributors",
    link: "https://drive.google.com/open?id=1-woghuds1IiEXQWsx4w2MCfLyX-R9qrc&usp=drive_copy",
  },
  {
    filename: "collateral assignment form",
    link: "https://drive.google.com/open?id=1lhXoMBqE4-J3z3wxvwMzcwoYCc_FlwKW&usp=drive_copy",
  },
  {
    filename: "GHA Service Request Form 20210302",
    link: "https://drive.google.com/open?id=1_SlY5fcsXAQs6wLu7x4BdoR9mNUooO31&usp=drive_copy",
  },
  {
    filename: "health statement form for post-issuance",
    link: "https://drive.google.com/open?id=1ad7easNeMDXkE9lyPbsHipCIT6Y_oNaZ&usp=drive_copy",
  },
  {
    filename: "health statement form for rider addition",
    link: "https://drive.google.com/open?id=1Rp5J5PO3Ne3MvPT-PaAT7N3dEjI3xob2&usp=drive_copy",
  },
  {
    filename: "policy change request form v2.",
    link: "https://drive.google.com/open?id=1HTt4AcwBCkZoSjJ-fPpP5HC8sPZbO6LW&usp=drive_copy",
  },
  {
    filename: "variable life policy fund switch and change in fund allocation",
    link: "https://drive.google.com/open?id=11MZMWLU4rTpEw6B7acpITxGDaTGJzQap&usp=drive_copy",
  },
  {
    filename:
      "variable life policy lump sum-regular top up and premium holiday application",
    link: "https://drive.google.com/open?id=1vOg-n4yPKmISh1nc5HksYCWijh05mtxU&usp=drive_copy",
  },
  {
    filename: "policy endowment-maturity benefit request form",
    link: "https://drive.google.com/open?id=1mqWogbGv7PaWX16Th-zXGqAydxFHGszM&usp=drive_copy",
  },
  {
    filename: "cash withdrawal and policy loan form v2",
    link: "https://drive.google.com/open?id=1NQiows8O0UjEW0GVQvcoUSZZARA8an9p&usp=drive_copy",
  },
  {
    filename: "direct credit to account form v2",
    link: "https://drive.google.com/open?id=1Ot8PvsJR22F9dP4sm6FRqIcEC-u_xtdX&usp=drive_copy",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-gray-50 min-h-screen min-w-screen">
      <SiteHeader />
      <div className="mx-auto p-6 max-w-3xl">
        <h2 className="text-3xl font-bold mb-8">Support</h2>
        <div className="space-y-4 columns-1">
          {files.map((file, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-medium">{file.filename}</p>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openIndex === index && (
                <Link
                  target="_blank"
                  href={file.link}
                  className="mt-2 text-gray-600 transition-all duration-300"
                >
                  See File
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </main>
  );
}
