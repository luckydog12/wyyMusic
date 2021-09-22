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

interface getRecommendedPlayListParams {
  limit: number
}
// 获取推荐歌单
export const getRecommendedPlayList = (data: getRecommendedPlayListParams) => {
  return req.request({
    url: `/personalized?limit=${data.limit}`,
    method: "get",
    data,
  })
}
