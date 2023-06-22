import { FC } from "react";
import { Project } from "@/app/types";

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  return (
    <div>
      <div>{project.name}</div>
      <div>{project.descriptionEn}</div>
    </div>
  );
};

export default ProjectItem;
