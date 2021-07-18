/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReward = /* GraphQL */ `
  subscription OnCreateReward {
    onCreateReward {
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
export const onUpdateReward = /* GraphQL */ `
  subscription OnUpdateReward {
    onUpdateReward {
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
export const onDeleteReward = /* GraphQL */ `
  subscription OnDeleteReward {
    onDeleteReward {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($id: String) {
    onCreateEmployee(id: $id) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($id: String) {
    onUpdateEmployee(id: $id) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($id: String) {
    onDeleteEmployee(id: $id) {
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
export const onCreateEmployeeReward = /* GraphQL */ `
  subscription OnCreateEmployeeReward($id: String) {
    onCreateEmployeeReward(id: $id) {
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
export const onUpdateEmployeeReward = /* GraphQL */ `
  subscription OnUpdateEmployeeReward($id: String) {
    onUpdateEmployeeReward(id: $id) {
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
export const onDeleteEmployeeReward = /* GraphQL */ `
  subscription OnDeleteEmployeeReward($id: String) {
    onDeleteEmployeeReward(id: $id) {
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
