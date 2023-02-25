import "./ProfileColumn.css";

export default function ProfileColumn() {
  return (
    <div class="profileColumn">
      <div class="leftSection">
        <span class="fullname">Süheyla Dilşat Karaarslan</span>
        <div class="job-names">
          <span class="job-name"> Mendix Developer </span>
          <span class="job-name"> Software Developer </span>
          <span class="job-name"> Aerospace Engineer </span>
          <span class="job-name"> UAS Pilot </span>
        </div>
      </div>
      <div class="rightSection">
        <img class="profile-photo" src="/assets/me.jpg" alt="me.jpg" />
      </div>
    </div>
  );
}
