import {
  siAlibabacloud,
  siAnsible,
  siArgo,
  siDatadog,
  siDocker,
  siElastic,
  siGit,
  siGithub,
  siGithubactions,
  siGitlab,
  siGnubash,
  siGooglecloud,
  siGrafana,
  siHelm,
  siHuawei,
  siJavascript,
  siJenkins,
  siKubernetes,
  siLinux,
  siNginx,
  siPrometheus,
  siPython,
  siTerraform,
} from "simple-icons";

const aws = {
  path: "M18.5 15.2c-2.3 1.7-5.7 2.6-8.6 2.6-4.1 0-7.8-1.5-10.6-4 .8.1 1.7.2 2.5.2 4.2 0 8-1.4 11.2-3.9.6-.5 1.1-.3 1.2.4.3 1.6.8 3.2 1.6 4.7h.1c.8-1.5 1.3-3.1 1.6-4.7.1-.7.6-.9 1.2-.4 1.2.9 2.3 1.8 3.3 2.8-1.1.8-2.3 1.6-3.5 2.3zM6.8 9.4 4 8.3l.4-1.1 2.8 1.1c.7.3 1.3.1 1.8-.5L12.4 4h1.3L10 8.4c-.6.7-1.5 1.1-2.4 1.1-.3 0-.6 0-.8-.1zm4.4 2.2 3.6 1.3c.7.3 1.5.1 2-.5l4.3-4.8h-1.4l-4 4.4c-.2.3-.6.4-1 .2L11 10.6l.2-1.2z",
};

const azure = {
  path: "M11.4 2.2 5.2 17.4 0 18.6 9.1 2.2h2.3zm1.2 0-2.2 6.1 4.3 5.4-6.9 2.4L21.8 22 24 16.8 12.6 2.2z",
};

const tencent = {
  path: "M12 3a7 7 0 0 1 6.7 5.1A5 5 0 0 1 19 18H6a5 5 0 0 1-.4-10A7 7 0 0 1 12 3z",
};

function mark(icon, name) {
  return { name, path: icon.path };
}

export const skills = [
  mark(aws, "AWS"),
  mark(azure, "Azure"),
  mark(siGooglecloud, "GCP"),
  mark(siAlibabacloud, "Alibaba"),
  mark(siHuawei, "Huawei"),
  mark(tencent, "Tencent"),
  mark(siKubernetes, "Kubernetes"),
  mark(siHelm, "Helm"),
  mark(siDocker, "Docker"),
  mark(siTerraform, "Terraform"),
  mark(siAnsible, "Ansible"),
  mark(siLinux, "Linux"),
  mark(siNginx, "Nginx"),
  mark(siGithubactions, "Actions"),
  mark(siJenkins, "Jenkins"),
  mark(siArgo, "Argo CD"),
  mark(siGitlab, "GitLab CI"),
  mark(siPrometheus, "Prometheus"),
  mark(siGrafana, "Grafana"),
  mark(siElastic, "ELK"),
  mark(siDatadog, "Datadog"),
  mark(siPython, "Python"),
  mark(siJavascript, "JavaScript"),
  mark(siGnubash, "Bash"),
  mark(siGit, "Git"),
  mark(siGithub, "GitHub"),
];
