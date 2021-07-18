/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReward = /* GraphQL */ `
  mutation CreateReward(
    $input: CreateRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    createReward(input: $input, condition: $condition) {
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
export const updateReward = /* GraphQL */ `
  mutation UpdateReward(
    $input: UpdateRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    updateReward(input: $input, condition: $condition) {
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
export const deleteReward = /* GraphQL */ `
  mutation DeleteReward(
    $input: DeleteRewardInput!
    $condition: ModelRewardConditionInput
  ) {
    deleteReward(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createEmployeeReward = /* GraphQL */ `
  mutation CreateEmployeeReward(
    $input: CreateEmployeeRewardInput!
    $condition: ModelEmployeeRewardConditionInput
  ) {
    createEmployeeReward(input: $input, condition: $condition) {
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
export const updateEmployeeReward = /* GraphQL */ `
  mutation UpdateEmployeeReward(
    $input: UpdateEmployeeRewardInput!
    $condition: ModelEmployeeRewardConditionInput
  ) {
    updateEmployeeReward(input: $input, condition: $condition) {
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
export const deleteEmployeeReward = /* GraphQL */ `
  mutation DeleteEmployeeReward(
    $input: DeleteEmployeeRewardInput!
    $condition: ModelEmployeeRewardConditionInput
  ) {
    deleteEmployeeReward(input: $input, condition: $condition) {
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
