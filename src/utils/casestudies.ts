// Order of the "Next Case Study" chain. The last entry links back to the first.
// To add a case study (e.g. GRID), insert its route at the desired position.
export const caseStudyOrder = ["/expenses", "/carers", "/memento"];

export function getNextCaseStudy(current: string): string {
  const index = caseStudyOrder.indexOf(current);
  if (index === -1) return caseStudyOrder[0];
  return caseStudyOrder[(index + 1) % caseStudyOrder.length];
}
