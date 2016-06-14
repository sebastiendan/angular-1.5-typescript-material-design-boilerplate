/// <reference path="./references.d.ts"/>

import {FormAutoFillFix} from "../../common/ts/directives/formAutoFillFix";
import app =  require("./app.module");

app.directive('formAutoFillFix', FormAutoFillFix.factory());