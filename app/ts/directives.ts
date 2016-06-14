/// <reference path="./references.d.ts"/>

import {FormAutoFillFix} from "./directives/formAutoFillFix";
import app =  require("./app.module");

app.directive('formAutoFillFix', FormAutoFillFix.factory());