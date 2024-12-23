import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Lincoln University</div>
							<div className="work-subtitle">
								<div className="work-job">
									Casual Software Tutor
								</div>
								<div className="work-duration">Aug 2023 - Present</div>
							</div>
							<ul className="work-detail">
								<li>Provided tutoring support for multiple courses, including Software Development, Advanced Database Management.</li>
								<li>Acted as product owner for students working on team projects, providing specific project requirements.</li>
								<li>Marked assessments for students, ensuring fair and constructive feedback.</li>
							</ul>
						</div>

						<div className="work">
							<div className="work-title">Frizzell Agricultural Electronics</div>
							<div className="work-subtitle">
								<div className="work-job">
								Full-stack Developer (Intern)
								</div>
								<div className="work-duration">Aug 2023 - Nov 2023</div>
							</div>
							
							<ul className="work-detail">
								<li>Upgraded and optimized user experience for the company's online system.</li>
								<li>Contributed to front-end development, architecture design, data presentation, and user experience enhancement.</li>
							</ul>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
