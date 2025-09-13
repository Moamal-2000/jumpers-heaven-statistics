"use client";

import s from "./About.module.scss";

const AboutPage = () => {
  return (
    <main className={s.aboutPage}>
      <div className="container">
        <div className={s.heroSection}>
          <div className={s.titleSection}>
            <h1 className={s.title}>About JH Stats</h1>
            <p className={s.subtitle}>
              A comprehensive leaderboard system for the Call of Duty 2 mod community
            </p>
          </div>
        </div>

        <div className={s.contentGrid}>
          <section className={s.section}>
            <h2 className={s.sectionTitle}>Project Overview</h2>
            <div className={s.card}>
              <p className={s.description}>
                JumpersHeaven is a Call of Duty 2 mod created by <strong>Iznogod</strong>, 
                featuring custom servers maintained by the mod creator. JH Stats is an 
                independent leaderboard system that retrieves and displays data from the 
                JumpersHeaven database.
              </p>
              <p className={s.description}>
                JH Stats provides players with comprehensive statistics, rankings, 
                and achievements within the JumpersHeaven community, offering a modern web 
                interface to explore player performance and map completion data.
              </p>
            </div>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Development Team</h2>
            <div className={s.card}>
              <div className={s.teamGrid}>
                <div className={s.teamMember}>
                  <div className={s.memberRole}>Backend Developer & Frontend Contributor</div>
                  <div className={s.memberName}>dcoy</div>
                  <div className={s.memberDescription}>
                    Did the backend and worked on the frontend development of the leaderboard system.
                  </div>
                </div>
                
                <div className={s.teamMember}>
                  <div className={s.memberRole}>Frontend Developer</div>
                  <div className={s.memberName}>SAD</div>
                  <div className={s.memberDescription}>
                    Worked on the frontend development of the leaderboard platform.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Technical Information</h2>
            <div className={s.card}>
              <div className={s.techGrid}>
                <div className={s.techItem}>
                  <h3 className={s.techTitle}>Independence</h3>
                  <p className={s.techDescription}>
                    Our project operates independently from JumpersHeaven. We simply retrieve 
                    and display data from their database without any direct affiliation or 
                    dependency on their systems.
                  </p>
                </div>
                
                <div className={s.techItem}>
                  <h3 className={s.techTitle}>Data Source</h3>
                  <p className={s.techDescription}>
                    All leaderboard data is sourced from the JumpersHeaven database with 
                    permission from Iznogod. We maintain data integrity while providing 
                    enhanced visualization and user experience.
                  </p>
                </div>
                
                <div className={s.techItem}>
                  <h3 className={s.techTitle}>Modern Web Interface</h3>
                  <p className={s.techDescription}>
                    Built with modern web technologies to provide a responsive, fast, and 
                    user-friendly experience for exploring player statistics and achievements.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Community</h2>
            <div className={s.card}>
              <p className={s.description}>
                JH Stats serves the JumpersHeaven community by providing easy access 
                to player statistics, map completion records, and competitive rankings. 
                Whether you're a casual player or a competitive jumper, our platform helps 
                you track your progress and compare your achievements with others.
              </p>
              <p className={s.description}>
                We're committed to maintaining an accurate, up-to-date, and user-friendly 
                platform that enhances the JumpersHeaven gaming experience.
              </p>
            </div>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Thanks</h2>
            <div className={s.card}>
              <p className={s.description}>
                Special thanks to <strong>Iznogod</strong> for creating the original JumpersHeaven 
                Call of Duty 2 mod and maintaining the servers. Without his work and the database 
                access he provided, this leaderboard project would not have been possible.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
