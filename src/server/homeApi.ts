import req from "./index"

interface getBannersParams {
  type: number
}

// 主页轮播图
export const getBanners = (data: getBannersParams) => {
  return req.request({
    url: `/banner?type=${data.type}`,
    method: "get",
    data,
  })
}
