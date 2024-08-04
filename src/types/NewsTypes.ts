export type News = {
  cover: string
  heading: string
  content: string
}

export enum UserType {
  SuperAdmin = 1,
  GeneralRegistrar = 2,
  ArbitrationRegistrar = 3,
  MediationRegistrar = 4,
  DiptiArbitrationRegistrar = 5,
  DiptiMediationRegistrar = 6,
  Arbitrator = 7,
  Mediator = 8,
  Bank = 9,
  NormalUser = 10,
  CentralCoordinator = 11,
  RelationshipManager = 12,
  Casemanager = 13
}