import {gbRequest} from "../request.js";
export function getUserLibrary(id) {
  return gbRequest.request({
    url: `/user/library/` + id,
  });
}