import Image from "@/components/image";
import DashboardLayout from "@/components/layouts/dashboard";
import ReferralCode from "@/components/referral/referral-code";
import React from "react";

const Invite = () => {
  return (
    <DashboardLayout>
      <h4 className="text-xl font-bold mb-5">Invite a Friend</h4>
      <p className="mb-7">Bring a buddy and earn XP together!</p>
      <section className="p-7 bg-mirage border border-white/25 rounded-2xl">
        <h4 className="font-extrabold mb-5">
          Get $1,000.00 for each friend you invite
        </h4>
        <p className="max-w-[32.25rem] mb-5">
          Plus up to 25% on their winnings. Enjoy consistent commissions whether
          they win or lose, in our Casino and Sportbook. Start earning now!
        </p>
        <div className="flex gap-11 flex-col md:flex-row">
          <div>
            <p className="text-gray-500 mb-2.5">Referral link</p>
            <ReferralCode code="https://www.example.com/referral5" />
          </div>
          <div>
            <p className="text-gray-500 mb-2.5">Referral code</p>
            <ReferralCode code="249o40323" />
          </div>
        </div>
      </section>
      <section className="p-7 bg-mirage border border-white/25 rounded-2xl mt-5">
        <p>Your referrals</p>
        <small className="text-xs mt-3 mb-4 block">Control your earnings</small>
        <div className="overflow-auto">
          <table className="min-w-[27rem] md:min-w-[47rem]">
            <thead>
              <tr>
                <th className="text-left text-boulder text-xs">NAME</th>
                <th className="text-left text-boulder text-xs">INVITED</th>
                <th className="text-left text-boulder text-xs">DEPOSITS</th>
                <th className="text-left text-boulder text-xs">EARNINGS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center gap-2 text-xs text-wild-sand pt-3.5">
                  <Image
                    src="/assets/images/avatar.png"
                    alt=""
                    className="w-3.5 h-3.5"
                  />
                  @jonnrogers
                </td>
                <td className="text-xs text-wild-sand pt-3.5">2 days ago</td>
                <td className="text-xs text-wild-sand pt-3.5">+500</td>
                <td className="text-xs text-wild-sand pt-3.5">120</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </DashboardLayout>
  );
};

export default Invite;
