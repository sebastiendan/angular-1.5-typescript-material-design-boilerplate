/// <reference path="./references.d.ts"/>

import {DataFactory} from "./factories/DataFactory";
import app =  require("./app.module");

app.factory('DataFactory', DataFactory.getInstance);