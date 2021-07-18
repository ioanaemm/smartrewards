/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReward = /* GraphQL */ `
  query GetReward($id: ID!) {
    getReward(id: $id) {
      id
      title
      description
      price
      frequency
      priceFrequency
      location
      photos
      type
      createdAt
      updatedAt
    }
  }
`;
export const listRewards = /* GraphQL */ `
  query ListRewards(
    $filter: ModelRewardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        price
        frequency
        priceFrequency
        location
        photos
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      rewards {
        items {
          id
          employeeId
          rewardId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rewards {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmployeeReward = /* GraphQL */ `
  query GetEmployeeReward($id: ID!) {
    getEmployeeReward(id: $id) {
      id
      employeeId
      rewardId
      reward {
        id
        title
        description
        price
        frequency
        priceFrequency
        location
        photos
        type
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEmployeeRewards = /* GraphQL */ `
  query ListEmployeeRewards(
    $filter: ModelEmployeeRewardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployeeRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        employeeId
        rewardId
        reward {
          id
          title
          description
          price
          frequency
          priceFrequency
          location
          photos
          type
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
