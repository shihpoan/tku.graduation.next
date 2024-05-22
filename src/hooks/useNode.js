import axios from "axios";

const nodeServerPath = "http://localhost:3001";

// apis
async function useNodeGetApi(apiPath, apiObj) {
  return await axios.get(`${nodeServerPath}${apiPath}`, {
    withCredentials: true,
  });
}

async function useNodePostApi(apiPath, apiObj) {
  return await axios.post(`${nodeServerPath}${apiPath}`, apiObj, {
    withCredentials: true,
  });
}

async function useNodePatchApi(apiPath, apiObj) {
  return await axios.patch(`${nodeServerPath}${apiPath}`, apiObj, {
    withCredentials: true,
  });
}

async function useNodeDeleteApi(apiPath, apiObj) {
  return await axios.delete(`${nodeServerPath}${apiPath}`, {
    withCredentials: true,
  });
}

module.exports = {
  useNodeGetApi,
  useNodePostApi,
  useNodePatchApi,
  useNodeDeleteApi,
};
