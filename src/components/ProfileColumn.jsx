import { Icon } from "@iconify/react";
import "./ProfileColumn.css";

export default function ProfileColumn() {
  return (
    <div class="profileColumn">
      <div class="leftSection">
        <span class="fullname">Süheyla Dilşat Karaarslan</span>
        <a
          href="mailto:sdkaraarslan@gmail.com"
          className="bg-bg hover:bg-opacity-50 text-text rounded-3xl py-1.5 px-2 mt-3 w-36 font-semibold flex items-center gap-3"
        >
          <span>Contact Me</span>
          <Icon icon="mdi:message-fast-outline" width={28} />
        </a>
        {/* <div class="job-names">
          <span class="job-name"> Mendix Developer </span>
          <span class="job-name"> Software Developer </span>
          <span class="job-name"> Aerospace Engineer </span>
          <span class="job-name"> UAS Pilot </span>
        </div> */}
      </div>
      <div class="rightSection">
        <img class="profile-photo" src="/assets/me.jpg" alt="me.jpg" />
      </div>
    </div>
  );
}
