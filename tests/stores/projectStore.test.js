import { setActivePinia, createPinia } from "pinia";
import { useProjectStore } from "../../stores/projectStore";

describe("Project Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should fetch projects", () => {
    const store = useProjectStore();
    store.fetchProjects();
    // Add expectations for fetchProjects logic once implemented
  });

  it("should select a project", () => {
    const store = useProjectStore();
    const project = { id: 1, name: "Project A" };
    store.selectProject(project);
    expect(store.selectedProject).toEqual(project);
  });

  it("should setup a project", () => {
    const store = useProjectStore();
    const project = { id: 1, name: "Project A" };
    store.setupProject(project);
    expect(store.activeProjects).toHaveLength(1);
  });
});
