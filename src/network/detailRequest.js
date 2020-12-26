import {request} from './request';

export function getDetailGoods(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend(){
  return request({
    url: '/recommend'
  })
}

export class Goods{
  constructor(itemInfo,columns,shopInfo){
    this.title = itemInfo.title;
    this.price = itemInfo.lowNowPrice;
    this.oldPrice = itemInfo.lowPrice;
    this.columns = columns;
    this.services = shopInfo.services;
    this.discountDesc = itemInfo.discountDesc;
    this.discountBgColor = itemInfo.discountBgColor;
  }
}

export class Shop{
  constructor(shopInfo){
    this.name = shopInfo.name;
    this.logo = shopInfo.shopLogo;
    this.goods = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;

  }
}

export class Detail{
  constructor(detailInfo){
    this.desc = detailInfo.desc;
    this.key = detailInfo.detailImage[0].key;
    this.list = detailInfo.detailImage[0].list;
  }
}