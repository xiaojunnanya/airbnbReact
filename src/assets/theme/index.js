/*
 * @Author: 肖俊男
 * @Date: 2023-03-26 15:24:09
 * @LastEditTime: 2023-03-26 16:08:51
 * @LastEditors: 肖俊男
 * @Description: 主题配置
 * @FilePath: \airbnb\src\assets\theme\index.js
 * 前端实习生：鲸落
 */
const theme = {
    color: {
        primaryColor: "#ff385c",
        secondColor: "#00848A",
    },
    text: {
        primaryColor: "#484848",
        secondColor: "#222"
    },
    mixin: {
        boxShadow: `
            transition: box-shadow 200ms ease;
            &:hover{
                box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
            }
        `,
    }
}

export default theme