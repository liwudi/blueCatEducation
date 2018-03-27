/**
 * Created by mapbar_front on 2018/3/27.
 */

const navConfig = [
    {type:'user', title:'免费课程', path:'/freecourse'},
    {type:'user', title:'职业发展', path:'/macareer'},
    {type:'user', title:'项目实战', path:'/project'},
    {type:'user', title:'猫友论坛', path:'/freecourse'},
];

const careerListConfig = [
    {icon: 'ie',work:'Web前端攻城狮',detail:'互联网时代最火热的技术'},
    {icon: 'user',work:'Java攻城狮',detail:'综合就业排名第一'},
    {icon: 'android',work:'Android攻城狮',detail:'移动设备市场份额第一'},
    {icon: 'user',work:'PHP攻城狮',detail:'可能是世界上最好的语言'},
    {icon: 'apple',work:'IOS攻城狮',detail:'可能是全球最好用的系统'}
];

export default {
    navConfig,
    careerListConfig
}