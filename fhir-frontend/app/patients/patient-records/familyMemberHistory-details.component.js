"use strict";
/*
    This component is for the Family Member History details page
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//Angular Imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var fhir_service_1 = require("../../FHIR/fhir.service");
var environment_1 = require("../../environments/environment");
var FamilyMemberHistoryDetailComponent = (function () {
    function FamilyMemberHistoryDetailComponent(_route, _router, fhirService, _location) {
        this._route = _route;
        this._router = _router;
        this.fhirService = fhirService;
        this._location = _location;
        //HTML Variables
        this.pageTitle = 'Family Member History Raw Json';
    }
    //This method runs before the page is loaded
    FamilyMemberHistoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get the ID
        this.sub = this._route.params.subscribe(function (params) {
            var id = params['id'];
            _this.id = id;
        });
        //Get the FamilyMemberHistory
        this.fhirService.getOneFhirObject('/' + this.id, environment_1.environment.apiUrl_familyMemberHistory)
            .subscribe(function (familyMemberHistory) { return _this.fhirObject = familyMemberHistory; }, function (error) { return _this.errorMessage = error; });
    };
    //This method runs when the user leaves the page
    FamilyMemberHistoryDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    //This controls what the back button does
    FamilyMemberHistoryDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/records/' + this.id.substring(this.id.length - 8, this.id.length)]);
    };
    return FamilyMemberHistoryDetailComponent;
}());
FamilyMemberHistoryDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: '../../FHIR/fhir-details.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        fhir_service_1.FhirService,
        common_1.Location])
], FamilyMemberHistoryDetailComponent);
exports.FamilyMemberHistoryDetailComponent = FamilyMemberHistoryDetailComponent;
//# sourceMappingURL=familyMemberHistory-details.component.js.map