/// <reference path="./references.d.ts"/>

import {DataTable} from "../../common/ts/components/dataTable";
import {DataForm} from "../../common/ts/components/dataForm";
import app =  require("./app.module");

app.component('dataTable', new DataTable());
app.component('dataForm', new DataForm());