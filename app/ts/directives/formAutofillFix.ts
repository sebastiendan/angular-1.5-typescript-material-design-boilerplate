/// <reference path="../references.d.ts"/>

/// <amd-dependency path="bowser" />

var bowser = require('bowser');

import {IDirective, IScope, IAugmentedJQuery, IAttributes, IDirectiveFactory, IIntervalService} from "angular";

export class FormAutoFillFix implements IDirective {
    restrict = 'A';

    constructor(private $interval: IIntervalService) {
    }

    link = (scope: IScope, element: IAugmentedJQuery, attrs: IAttributes) => {
        let me = this,
        count: number = 0,
        autofilled: any,
        wrapper: any,
        interval = this.$interval(function() {
            if (bowser.msie && bowser.version <= 9) {
                me.$interval.cancel(interval);
                return false;
            }

            if (count > 10) {
                me.$interval.cancel(interval);
            }

            autofilled = element.find('input:-webkit-autofill');
            if (autofilled.length > 0) {
                angular.forEach(autofilled, function(element: any, index: number){
                    wrapper = angular.element(element).parent();
                    if (!wrapper.hasClass('md-input-has-value')) {
                        wrapper.addClass('md-input-has-value');
                    };
                });
                me.$interval.cancel(interval);
            }

            count++;
        }, 100);
    }

    static factory(): IDirectiveFactory {
        const directive = ($interval: IIntervalService) => new FormAutoFillFix($interval);
        directive.$inject = ['$interval'];
        return directive;
    }
}