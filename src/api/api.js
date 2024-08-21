import apiClient from '../utils/apiClient';

const iqdistribution = async () => {
    try {
      const response = await apiClient.get(`result/iq-distribution`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };
  const studyfield = async () => {
    try {
      const response = await apiClient.get(`result/study-field`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };  
  const studyduration = async () => {
    try {
      const response = await apiClient.get(`result/study-duration`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };  
  const agedistribution = async () => {
    try {
      const response = await apiClient.get(`result/age-distribution`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };

  const topScores = async () => {
    try {
      const response = await apiClient.get(`/result/topScorers`);
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };

  const saveResult = async (data) => {
    try {
      const response = await apiClient.post('result/save', data);
      return response.data;
    } catch (error) {
      console.error("Error saving result:", error);
      throw error;
    }
  };

export default {
    iqdistribution,
    studyfield,
    studyduration,
    agedistribution,
    topScores,
    saveResult,

};