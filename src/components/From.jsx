import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../app/img/logo.webp";

export default function From() {
  return (
    <section> 
      <div className="bg-white py-20 w-full">
        <div className="container mx-auto">
          <div>
            
            <Image src={Logo} alt="logo" />
          </div>
          <div className="pt-10 flex flex-col gap-5">
            <h3 className="font-bold text-2xl">
              Health Care Coverage Waiver Form
            </h3>
            <div className="flex items-end">
              <h5 className="font-medium">Employer Company Name:</h5>
              <h5 className="border-black border-b px-3 font-medium">
                Axzons Health System Corporation
              </h5>
            </div>
            <div className="flex items-end">
              <h5 className="font-medium">Employee Name:</h5>
              <h5 className="border-black border-b px-3 w-[60%] font-medium"></h5>
            </div>
            <p className="text-sm font-medium">
              On behalf of myself and my eligible dependents (if any), I waive
              the option to enroll in Axzons Home Health Care health insurance
              offered at this time by or through my employer for the following
              reason:
            </p>
            <div className="flex flex-col">
              <div className="flex  gap-5">
                <input type="checkbox" name="check" className="w-5 h-5" />
                <p className="font-medium">
                  I am covered under another group plan as a spouse or dependent
                </p>
              </div>
              <div className="flex gap-5">
                <input type="checkbox" name="check" className="w-5 h-5" />
                <p className="font-medium">
                  I am covered by Medicare or Veterans Program
                </p>
              </div>
              <div className="flex gap-5">
                <input type="checkbox" name="check" className="w-5 h-5" />
                <p className="font-medium">
                  I have purchased subsidized coverage through state or federal
                  Exchange
                </p>
              </div>
              <div className="flex gap-5">
                <input type="checkbox" name="check" className="w-5 h-5" />
                <p className="font-medium">
                  I am covered under another group plan sponsored by a second
                  employer
                </p>
              </div>
            </div>
            <p className="text-sm font-medium">
              For each person declining to enroll in Axzons Home Health Care
              health insurance at this time because of other health care
              coverage listed above, please provide the following information:
            </p>
            <div className="flex items-end">
              <h5 className="font-medium">Subscriber Name:</h5>
              <h5 className="border-black border-b px-3 w-[60%] font-medium"></h5>
            </div>
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="flex ">
                <h5 className="font-medium">Carrier Name:</h5>
                <h5 className="border-black border-b px-3 w-[60%] lg:w-[80%] font-medium"></h5>
              </div>
              <div className="flex items-end">
                <h5 className="font-medium">Group/Policy Number:</h5>
                <h5 className="border-black border-b px-3 w-[60%] font-medium"></h5>
              </div>{" "}
            </div>
            <div className="flex flex-col">
              <div className="flex  gap-5">
                <input type="checkbox" name="check" className="w-5 h-5" />
                <p className="font-medium">
                  I am covered under another carrier’s plan sponsored by this
                  employer
                </p>
              </div>
              <div className="flex  gap-5">
                <input type="checkbox" name="check" className="w-5 h-5" />
                <p className="font-medium">
                  am covered through an Individual plan, or purchased coverage
                  through state or federal exchange with no subsidy
                </p>
              </div>
              <div className="flex  gap-5">
                <input type="checkbox" name="check" className="w-5 h-5" />
                <p className="font-medium">
                  I do not wish to participate in health care benefits at this
                  time (I am declining health insurance entirely)
                </p>
              </div>
            </div>
            <div className="pt-2">
              <h6 className="font-semibold">Notice of Enrollment Rights</h6>
              <p>
                If you are declining enrollment for yourself or your dependents
                (including your spouse) because of other health insurance
                coverage, you may in the future be able to enroll yourself or
                your dependents in this health plan, provided that you request
                enrollment within 30 days after your other coverage ends. In
                addition, if you have a new dependent as a result of marriage,
                birth, adoption, or placement for adoption, you may be able to
                enroll yourself and your dependents, provided that you request
                enrollment within 30 days after the marriage, birth, adoption,
                or placement for adoption
              </p>
              <p className="pt-3 font-medium">
                I understand that any person choosing to enroll later must meet
                Axzons Home Health Care health insurance’s requirements for
                eligibility and for late enrollees.
              </p>
              <div className="grid lg:grid-cols-2 gap-5 pt-10">
                <div className="flex">
                  <h5 className="font-medium">Employee Signature:</h5>
                  <h5 className="border-black border-b px-3 w-[60%] lg:w-[75%] font-medium"></h5>
                </div>
                <div className="flex items-end">
                  <h5 className="font-medium">Date:</h5>
                  <h5 className="border-black border-b px-3 w-[60%] font-medium"></h5>
                </div>{" "}
              </div>
              <p className="text-sm font-medium pt-5">
                I affirm that the assertions in this form are true and complete
                to the best of my knowledge, and I understand that Axzons
                Homecare has the right to terminate coverage, retroactive to the
                effective date of coverage, for any material misinformation
                (including omissions) contained in this form.
              </p>
              <div className="grid lg:grid-cols-2 gap-5 pt-5">
                <div className="flex">
                  <h5 className="font-medium">Employee Signature:</h5>
                  <h5 className="border-black border-b-[3px] px-3 w-[60%] lg:w-[75%] font-medium"></h5>
                </div>
                <div className="flex items-end">
                  <h5 className="font-medium">Date:</h5>
                  <h5 className="border-black border-b-[3px] px-3 w-[60%] font-medium"></h5>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
