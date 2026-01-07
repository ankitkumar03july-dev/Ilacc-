import TopBanner from "@/components/layout/TopBanner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "@/components/ui/file-upload";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface FileUploads {
  aadhaarFile: File | null;
  panCardFile: File | null;
  gstCertFile: File | null;
  companyLogoFile: File | null;
  visitingCardFile: File | null;
}

const MembershipApplication = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    applicantType: "",
    fullName: "",
    companyName: "",
    businessNature: "",
    yearEstablished: "",
    mobile: "",
    email: "",
    companyEmail: "",
    telephone: "",
    website: "",
    registeredAddress: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    panNumber: "",
    gstNumber: "",
    cinNumber: "",
    employeeCount: "",
    membershipTier: "",
    aadhaarPassport: "",
    panCardNumber: "",
    gstNumberDoc: "",
    cinNumberDoc: "",
    declaration1: false,
    declaration2: false,
    signatoryName: "",
    signature: "",
    date: "",
  });

  const [files, setFiles] = useState<FileUploads>({
    aadhaarFile: null,
    panCardFile: null,
    gstCertFile: null,
    companyLogoFile: null,
    visitingCardFile: null,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: keyof FileUploads, file: File | null) => {
    setFiles((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log form data and files
    console.log("Form submitted:", formData);
    console.log("Files:", files);
    
    // Show success toast
    toast.success("Application submitted successfully!", {
      description: "We will review your application and get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBanner />
      <Header />

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* BACK BUTTON */}
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/membership")}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Membership
          </Button>

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              ILACC Membership Application
            </h1>
            <p className="text-lg text-muted-foreground">
              Complete the form below to apply for ILACC membership
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* SECTION 1: APPLICANT TYPE */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                SECTION 1: APPLICANT TYPE
              </h2>
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Type of Applicant *
                </Label>
                <RadioGroup
                  value={formData.applicantType}
                  onValueChange={(value) =>
                    handleInputChange("applicantType", value)
                  }
                  className="grid grid-cols-1 md:grid-cols-2 gap-3"
                >
                  {[
                    "Company / Corporate",
                    "MSME / Startup",
                    "Individual / Professional",
                    "Institution / Association",
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <RadioGroupItem value={type} id={type} />
                      <Label htmlFor={type} className="cursor-pointer">
                        {type}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* SECTION 2: APPLICANT DETAILS */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                SECTION 2: APPLICANT DETAILS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">
                    Full Name (Applicant / Authorized Signatory) *
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="companyName">
                    Company / Organization Name *
                  </Label>
                  <Input
                    id="companyName"
                    value={formData.companyName}
                    onChange={(e) =>
                      handleInputChange("companyName", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="businessNature">
                    Nature of Business / Industry Type / Profession *
                  </Label>
                  <Input
                    id="businessNature"
                    value={formData.businessNature}
                    onChange={(e) =>
                      handleInputChange("businessNature", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="yearEstablished">
                    Year of Establishment (if applicable)
                  </Label>
                  <Input
                    id="yearEstablished"
                    value={formData.yearEstablished}
                    onChange={(e) =>
                      handleInputChange("yearEstablished", e.target.value)
                    }
                    className="mt-2"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 3: CONTACT DETAILS */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                SECTION 3: CONTACT DETAILS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) =>
                      handleInputChange("mobile", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      handleInputChange("email", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="companyEmail">Company Email *</Label>
                  <Input
                    id="companyEmail"
                    type="email"
                    value={formData.companyEmail}
                    onChange={(e) =>
                      handleInputChange("companyEmail", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="telephone">Telephone (Landline)</Label>
                  <Input
                    id="telephone"
                    value={formData.telephone}
                    onChange={(e) =>
                      handleInputChange("telephone", e.target.value)
                    }
                    className="mt-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="website">Website (if any)</Label>
                  <Input
                    id="website"
                    value={formData.website}
                    onChange={(e) =>
                      handleInputChange("website", e.target.value)
                    }
                    className="mt-2"
                    placeholder="https://"
                  />
                </div>
              </div>
            </div>

            {/* SECTION 4: ADDRESS DETAILS */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                SECTION 4: ADDRESS DETAILS
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <Label htmlFor="registeredAddress">Registered Address *</Label>
                  <Textarea
                    id="registeredAddress"
                    value={formData.registeredAddress}
                    onChange={(e) =>
                      handleInputChange("registeredAddress", e.target.value)
                    }
                    className="mt-2"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country *</Label>
                  <Input
                    id="country"
                    value={formData.country}
                    onChange={(e) =>
                      handleInputChange("country", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="pinCode">PIN Code *</Label>
                  <Input
                    id="pinCode"
                    value={formData.pinCode}
                    onChange={(e) =>
                      handleInputChange("pinCode", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
              </div>
            </div>

            {/* SECTION 5: STATUTORY & BUSINESS INFORMATION */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                SECTION 5: STATUTORY & BUSINESS INFORMATION
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="panNumber">
                    PAN Number (Individual / Company) *
                  </Label>
                  <Input
                    id="panNumber"
                    value={formData.panNumber}
                    onChange={(e) =>
                      handleInputChange("panNumber", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="gstNumber">GST Number (If applicable)</Label>
                  <Input
                    id="gstNumber"
                    value={formData.gstNumber}
                    onChange={(e) =>
                      handleInputChange("gstNumber", e.target.value)
                    }
                    className="mt-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="cinNumber">
                    Corporate Identity Number (CIN) (For registered companies
                    only)
                  </Label>
                  <Input
                    id="cinNumber"
                    value={formData.cinNumber}
                    onChange={(e) =>
                      handleInputChange("cinNumber", e.target.value)
                    }
                    className="mt-2"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-base font-semibold mb-4 block">
                    Number of Employees
                  </Label>
                  <RadioGroup
                    value={formData.employeeCount}
                    onValueChange={(value) =>
                      handleInputChange("employeeCount", value)
                    }
                    className="flex flex-wrap gap-4"
                  >
                    {["1–10", "11–50", "51–200", "201–500", "500+"].map(
                      (count) => (
                        <div
                          key={count}
                          className="flex items-center space-x-2"
                        >
                          <RadioGroupItem value={count} id={`emp-${count}`} />
                          <Label
                            htmlFor={`emp-${count}`}
                            className="cursor-pointer"
                          >
                            {count}
                          </Label>
                        </div>
                      )
                    )}
                  </RadioGroup>
                </div>
              </div>
            </div>

            {/* SECTION 6: MEMBERSHIP TIER SELECTION */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                SECTION 6: MEMBERSHIP TIER SELECTION
              </h2>
              <div>
                <Label className="text-base font-semibold mb-4 block">
                  Please select your desired ILACC Membership Tier *
                </Label>
                <RadioGroup
                  value={formData.membershipTier}
                  onValueChange={(value) =>
                    handleInputChange("membershipTier", value)
                  }
                  className="space-y-3"
                >
                  {[
                    {
                      value: "individual",
                      label: "Individual Membership – ₹75,000 / Year",
                      desc: "1 person access, 1 flagship event, 1 diplomatic interaction, select delegations",
                    },
                    {
                      value: "silver",
                      label: "Silver Membership – ₹1,00,000 / Year",
                      desc: "2 person access, 1 flagship event, 3 diplomatic interactions, select delegations",
                    },
                    {
                      value: "gold",
                      label: "Gold Membership – ₹3,00,000 / Year",
                      desc: "3 person access, 1 flagship event, 5 diplomatic interactions, delegations, special event rates",
                    },
                    {
                      value: "diamond",
                      label: "Diamond Membership – ₹5,00,000 / Year",
                      desc: "3 person access, 1 flagship event, 10 diplomatic interactions, delegations, special rates",
                    },
                    {
                      value: "exclusive",
                      label: "Exclusive Partnership (By Invitation / EOI)",
                      desc: "Bespoke engagement, market access strategy, exclusive diplomatic & government connects",
                    },
                  ].map((tier) => (
                    <div
                      key={tier.value}
                      className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                    >
                      <RadioGroupItem
                        value={tier.value}
                        id={tier.value}
                        className="mt-1"
                      />
                      <div>
                        <Label
                          htmlFor={tier.value}
                          className="cursor-pointer font-semibold"
                        >
                          {tier.label}
                        </Label>
                        <p className="text-sm text-muted-foreground mt-1">
                          {tier.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            {/* SECTION 7: DOCUMENT UPLOADS */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                SECTION 7: DOCUMENT UPLOADS
              </h2>
              <p className="text-muted-foreground mb-6">
                Documents Required for Individual / Proprietorship Firms /
                Registered Companies
              </p>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="aadhaarPassport">
                    Aadhaar Card Number or Passport Number *
                  </Label>
                  <Input
                    id="aadhaarPassport"
                    value={formData.aadhaarPassport}
                    onChange={(e) =>
                      handleInputChange("aadhaarPassport", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                  <div className="mt-3">
                    <Label className="text-sm text-muted-foreground block mb-2">
                      Upload Aadhaar Card or Passport
                    </Label>
                    <FileUpload
                      id="aadhaar-upload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      maxSize={10}
                      value={files.aadhaarFile}
                      onFileChange={(file) => handleFileChange("aadhaarFile", file)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="panCardNumber">PAN Card Number</Label>
                  <Input
                    id="panCardNumber"
                    value={formData.panCardNumber}
                    onChange={(e) =>
                      handleInputChange("panCardNumber", e.target.value)
                    }
                    className="mt-2"
                  />
                  <div className="mt-3">
                    <Label className="text-sm text-muted-foreground block mb-2">
                      Upload PAN Card
                    </Label>
                    <FileUpload
                      id="pan-upload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      maxSize={10}
                      value={files.panCardFile}
                      onFileChange={(file) => handleFileChange("panCardFile", file)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="gstNumberDoc">
                    GST Number (if applicable)
                  </Label>
                  <Input
                    id="gstNumberDoc"
                    value={formData.gstNumberDoc}
                    onChange={(e) =>
                      handleInputChange("gstNumberDoc", e.target.value)
                    }
                    className="mt-2"
                  />
                  <div className="mt-3">
                    <Label className="text-sm text-muted-foreground block mb-2">
                      Upload GST Certificate (if applicable)
                    </Label>
                    <FileUpload
                      id="gst-upload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      maxSize={10}
                      value={files.gstCertFile}
                      onFileChange={(file) => handleFileChange("gstCertFile", file)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cinNumberDoc">
                    Corporate Identity Number (CIN)
                  </Label>
                  <Input
                    id="cinNumberDoc"
                    value={formData.cinNumberDoc}
                    onChange={(e) =>
                      handleInputChange("cinNumberDoc", e.target.value)
                    }
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground block mb-2">
                    Upload Company Logo
                  </Label>
                  <FileUpload
                    id="logo-upload"
                    accept=".jpg,.jpeg,.png,.svg"
                    maxSize={10}
                    value={files.companyLogoFile}
                    onFileChange={(file) => handleFileChange("companyLogoFile", file)}
                  />
                </div>

                <div>
                  <Label className="text-sm text-muted-foreground block mb-2">
                    Upload Visiting Card / ID Proof
                  </Label>
                  <FileUpload
                    id="visiting-card-upload"
                    accept=".pdf,.jpg,.jpeg,.png"
                    maxSize={10}
                    value={files.visitingCardFile}
                    onFileChange={(file) => handleFileChange("visitingCardFile", file)}
                  />
                </div>
              </div>
            </div>

            {/* SECTION 8: DECLARATION */}
            <div className="bg-card rounded-xl p-6 md:p-8 shadow-md border border-border">
              <h2 className="font-heading text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                SECTION 8: DECLARATION
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                (Check Box – Required)
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="declaration1"
                    checked={formData.declaration1}
                    onCheckedChange={(checked) =>
                      handleInputChange("declaration1", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="declaration1"
                    className="cursor-pointer leading-relaxed"
                  >
                    I hereby declare that the information provided above is true
                    and correct to the best of my knowledge.
                  </Label>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="declaration2"
                    checked={formData.declaration2}
                    onCheckedChange={(checked) =>
                      handleInputChange("declaration2", checked as boolean)
                    }
                  />
                  <Label
                    htmlFor="declaration2"
                    className="cursor-pointer leading-relaxed"
                  >
                    I agree to abide by all rules, regulations, membership
                    terms, and code of conduct of ILACC.
                  </Label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="signatoryName">
                    Authorized Signatory Name *
                  </Label>
                  <Input
                    id="signatoryName"
                    value={formData.signatoryName}
                    onChange={(e) =>
                      handleInputChange("signatoryName", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="signature">
                    Signature (Type Full Name) *
                  </Label>
                  <Input
                    id="signature"
                    value={formData.signature}
                    onChange={(e) =>
                      handleInputChange("signature", e.target.value)
                    }
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Footer & Submit */}
            <div className="text-center space-y-6">
              <Button type="submit" size="lg" className="px-12">
                Submit Application
              </Button>
              <p className="text-muted-foreground italic">
                ILACC – Bridging Continents. Creating Opportunities. Shaping
                Global Partnerships.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MembershipApplication;
