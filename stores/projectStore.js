import { defineStore } from "pinia";

export const useProjectStore = defineStore("project", {
  state: () => ({
    projects: [],
    activeProjects: [],
    selectedProject: null,
  }),
  actions: {
    fetchProjects() {
      // Logic to fetch projects
    },
    selectProject(project) {
      this.selectedProject = project;
    },
    setupProject(project) {
      this.activeProjects.push(project);
    },
  },
});
