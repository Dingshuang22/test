import Vue from 'vue'
import { 
    Button,
    Checkbox ,
    Pagination, 
    MessageBox,
    Message,
    Carousel,
    CarouselItem,
    Image,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Icon,
    Form,
    FormItem,
    Input,
    Row,
    Col,
    Card,
    Table,
    TableColumn,
    Progress,
    Backtop,
    Menu,
    Submenu,
    MenuItem,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Dialog,
    Select,
    Option,
    Tag,
    Tabs,
    TabPane,
    DatePicker,
    TimeSelect,
    TimePicker,
    Switch,
    Cascader,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Upload
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Pagination);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Image);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Icon);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Progress);
Vue.use(Backtop);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tag);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Switch);
Vue.use(Cascader);
Vue.use(CheckboxGroup);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Upload);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

// language
import en from 'element-ui/lib/locale/lang/en'
import zh from 'element-ui/lib/locale/lang/zh-CN'
import locale from 'element-ui/lib/locale'

// 设置语言
// locale.use(en)
// Vue.prototype.$locale = locale;