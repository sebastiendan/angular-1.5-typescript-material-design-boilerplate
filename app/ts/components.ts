/// <reference path="./references.d.ts"/>

import {SdInput} from "./components/form-elements/sdInput";
import {SdRadio} from "./components/form-elements/sdRadio";
import {SdSelect} from "./components/form-elements/sdSelect";
import {SdSubmit} from "./components/form-elements/sdSubmit";
import {HeaderBlock} from "./components/headerBlock";
import {Home} from "./components/home";
import {ViewList} from "./components/viewList";
import {ViewForm} from "./components/viewForm";
import app =  require("./app.module");

app.component('sdInput', new SdInput());
app.component('sdRadio', new SdRadio());
app.component('sdSelect', new SdSelect());
app.component('sdSubmit', new SdSubmit());
app.component('headerBlock', new HeaderBlock());
app.component('home', new Home());
app.component('viewList', new ViewList());
app.component('viewForm', new ViewForm());