var express = require('express');
var router = express.Router();
var url = require('url');
var app = require('../app');
//var mongoose = require('mongoose');
var offerCollection = require('./schema.js');
var mongodb = require("mongodb");

var mongoURL = "mongodb://OMNmudOQNeFd:UUhwzKRtJQhm@mongosoup-cont002.mongosoup.de:31322/cc_OMNmudOQNeFd";
//var mongoURL = "mongodb://127.0.0.1/mydb";

var resString ={"showTurboReOptIn":false,"turboReOptInSelected":false,"paymentMethodsModel":{"paymentMethodList":[{"paymentMethodType":{"id":12},"selected":true,"applicable":true,"paymentMethodOrder":1,"buyerProtected":true,"errorsModel":{"errorsList":[]},"useShippingAsBilling":false,"displayPayPalCCImage":true},{"paymentMethodType":{"id":35},"selected":false,"promotionalMessage":"Extra$10ineBayBuckson1stpurchaseSubjecttocreditapproval.","applicable":true,"paymentMethodOrder":2,"buyerProtected":true,"seeTermsURL":"https://apply.billmelater.com/apply?guid=8WVIEN4Y&assetId=BVI1114","errorsModel":{"errorsList":[]},"useShippingAsBilling":false,"displayPayPalCCImage":false}],"otherPaymentMethodsOffered":true,"selectedPaymentModel":{"paymentMethodType":{"id":12},"selected":true,"applicable":true,"paymentMethodOrder":1,"buyerProtected":true,"errorsModel":{"errorsList":[]},"useShippingAsBilling":false,"displayPayPalCCImage":true},"actionMessagingEnum":"SKIP_CYP_MESSAGE","groupByEBPPaymentMethods":false,"expandedCount":0,"guaranteeEnum":"NO_ITEM_QUALIFIES"},"rypsubmitTimeOut":4000,"refreshCount":0,"showNewInteraction":true,"cartSummaryModel":{"zipCode":"95134","subTotal":"32.95,USD","itemCount":1,"totalAmount":"35.92,USD","shippingCost":"0.0,USD","discount":"0.0,USD","adjustmentsFees":"0.0,USD","incentiveList":[],"adjustmentsModel":{"salesTaxModel":{"amount":"2.97,USD","salesTaxState":"CA"},"shippingInsurance":"0.0,USD"}},"shippingAddressesModel":{"shippingAddresses":{"1916644239020":{"phoneNumber":"4253065483","siteId":0,"addressId":"1916644239020","contactName":"punitagrawal","addressLine1":"3700CASAVERDEST","addressLine2":"APT2311","city":"sanjose","state":"CA","zip":"95134-3335","country":"UnitedStates","countryCode":"US"}},"selectedAddressId":1916644239020},"cartDetailsModel":{"sellerBucketList":[{"orderList":[],"sellerInfoModel":{"sellerName":"jtidirect","hasSelectedItems":true,"actionModels":{},"showMessageToSeller":true},"itemList":[{"itemAttributesModel":{"shippingServiceList":[{"selected":true,"shippingServiceId":"27422236507","shippingServiceCategory":"EconomyShipping","shippingServiceName":"EconomyShipping","shippingCost":"0.0,USD","discountedCost":"0.0,USD","genericType":{"description":"EconomyShipping","id":7},"guaranteedHolidayArrival":false,"deliveryEstimateTreatmentEnum":{"id":3},"shippingIntermediationApplied":false,"postalCode":"95134","deliveryEstimateModel":{"deliveryDateMin":"2014-11-20T01:00:00.552-0700","deliveryDateMax":"2014-11-20T01:00:00.552-0700","deliveryDaysMin":4,"deliveryDaysMax":4,"displayDeliveryDates":true},"itemLocation":"LosAngeles,California","promoCostNotCalculable":false},{"selected":false,"shippingServiceId":"27422236519","shippingServiceCategory":"ExpeditedShipping","shippingServiceName":"USPSPriorityMail","shippingCost":"8.0,USD","discountedCost":"8.0,USD","genericType":{"description":"Expediteshipping","id":2},"guaranteedHolidayArrival":false,"deliveryEstimateTreatmentEnum":{"id":4},"shippingIntermediationApplied":false,"postalCode":"95134","deliveryEstimateModel":{"deliveryDateMin":"2014-11-20T01:00:00.552-0700","deliveryDateMax":"2014-11-20T01:00:00.552-0700","deliveryDaysMin":4,"deliveryDaysMax":4,"displayDeliveryDates":true},"itemLocation":"LosAngeles,California","promoCostNotCalculable":false}],"supportingDocumentList":[],"selected":true,"systemRemoved":false,"adjustmentsModel":{"salesTaxModel":{"amount":"2.97,USD","salesTaxState":"CA"}},"errorsModel":{"errorsList":[]},"defaultItem":false,"itemLocation":"LosAngeles,California"},"itemInfoModel":{"guaranteed":false,"itemId":231263957067,"variationId":0,"title":"VTECHCS67192DECT6.0ExpandableCordlessPhonewithCallerID2Handset","quantity":1,"price":"32.95,USD","complexId":"BId-ItemId=231263957067;EId-;Domain-ebay;LId-15761836939","uniqueId":"i231263957067","singleUnitPrice":"32.95,USD","firstItemCategoryList":[293,3286,33929],"depositPrice":false,"shouldShowImage":false},"promoShippingAvailable":false,"itemNoteModel":{"errorsModel":{"errorsList":[]}},"itemType":"StandardItem"}],"containsDefaultItem":false,"sellerBucketAdjustmentsModel":{"sellerName":"jtidirect","hideDiscountPrice":false},"errorsModel":{"errorsList":[]},"displayPaymentMethodMessaging":false,"selectedPaymentMethod":{"id":12}}],"cartId":"10512831379"},"incentiveDisplayModel":{"incentiveList":[],"errorsModel":{"errorsList":[]}},"errorsModel":{"pageBlocked":false,"errorsList":[]},"rewardsDisplayModel":{"rewardsTotalAmount":"0.66,USD","itemRewardsList":[{"itemTitle":"VTECHCS67192DECT6.0ExpandableCordlessPhonewithCallerID2Handset","baseRewardsAmount":"0.66,USD","totalRewardsAmount":"0.66,USD","programName":"EBAY_BUCKS","totalRewardsPoints":0,"baseRewardsPoints":0}],"hasPromotionalRewards":false,"rewardsTotalPoints":0},"sessionAttributesModel":{"pageTypeEnum":"TURBO_STREAMLINED","sessionAttributeEnumSet":["JS_USED","IS_SERVICE_SESSION","HAS_UNCOMMITTED_ITEM","IN_NETWORK_USER","SINGLE_ITEM"],"sessionId":274271773015,"ajaxTimeOut":10000,"cartVersion":"1416193334046","sessionAttributes":"TurboCheckout;ShopCartEntry;SkipCYP;ServiceSession;SchedulerFeatureEnabled;scta","cartId":"10512831379"},"payPalTrackingData":{"fpti.pgrp":"main:ec:ixosl:ebay:ryp","fpti.bzsr":"main","fpti.ccpg":"glb","fpti.shir":"main_ec_ixosl_ebay","fpti.crtd":"10512831379","fpti.lgin":"in","fpti.erpg":"","fpti.bchn":"ec","fpti.oldp":"","fpti.pgsf":"ixosl","fpti.page":"main:ec:ixosl:ebay:ryp:redesigned::","fpti.vers":"redesigned::"},"signinUserId":"devaldudhia","donationsModel":{"charityName":"TeamRubicon","charityId":"54706","amountList":{"0":"1.0,USD","1":"2.0,USD","2":"5.0,USD","3":"10.0,USD","4":"25.0,USD"},"charityDescription":"Give$1soTeamRubiconcandeployemergencyresponseteamsintodisasterzones.","missionStatement":"TeamRubicon(TR)unitestheskillsandexperiencesofmilitaryveteranswithfirstrespondersanddisasterprofessionalstorapidlydeployemergencyresponseteamsintodisasterzones.","disclaimer":"PayPalGivingFund,ournonprofitpartner,delivers100%ofyourdonationtoyourchosennonprofit.","enabled":true,"helpPageURL":"http://www.ebaygivingworks.com/ns/pprequired.html"},"shopCartFlow":true,"retailStandardPayFlow":false,"callToActionModel":{"total":"35.92,USD","shippingIntermediationApplied":false,"skipCYP":true,"selectedPaymentMethodModel":{"paymentMethodType":{"id":12},"buyerProtectionEligible":true,"paymentMethodAffectsCart":false},"turboModel":{"payPalIFrameURL":"https://www.paypal.com/webapps/inlinexo/webflow/sparta/ixoflow?&token=EC-1DH15669HS435380A&locale=en_US&useraction=commit&ab=fs:a;scta:b;ds:a&cssg=bbb2b42e1490a2a6c6c2dd40ffe90427","payPalTimeout":25000,"iframeDomain":"https://www.paypal.com","showTurboBanner":false,"payPalLoadTimeout":11000,"payPalInfoBannerEligible":false,"enableInitPayAjax":false},"needsCommit":false,"containsUncommittedItem":true},"displaySurveyLink":true,"sojournerData":{"sojournerPropertyMap":{"593":{"name":"si","value":"274271773015"},"924":{"name":"page","value":"ryprender"},"929":{"name":"cart_id","value":"10512831379"},"3015":{"name":"pptm","value":"Unknown"},"1288":{"name":"npm","value":"2"},"3104":{"name":"sxorrc","value":1416193334583},"3016":{"name":"ckfl","value":"strc"},"3874":{"name":"bopx","value":0},"1278":{"name":"buyer_id","value":"devaldudhia"},"1279":{"name":"del","value":"0"},"1302":{"name":"tamt","value":"35.92"},"1303":{"name":"xamt","value":"32.95"},"3649":{"name":"rpts","value":1},"1281":{"name":"bkts","value":"1"},"1293":{"name":"nslr","value":"1"},"1282":{"name":"txns","value":"1"},"1283":{"name":"pm","value":"PayPal"},"3241":{"name":"uncifl","value":1},"3099":{"name":"sxorri","value":1416193334427},"3242":{"name":"ectkn","value":"https://www.paypal.com/webapps/inlinexo/webflow/sparta/ixoflow?&token=EC-1DH15669HS435380A&locale=en_US&useraction=commit&ab=fs:a;scta:b;ds:a&cssg=bbb2b42e1490a2a6c6c2dd40ffe90427"},"1284":{"name":"crt","value":"47"},"1076":{"name":"tax_sub_tot","value":"2.97"}},"sojournerVectorMap":{"3312":{"name":"cart_itm","value":["231263957067"]},"861":{"name":"curprice","value":["32.95"]},"3879":{"name":"itmsh","value":["231263957067:-1:EconomyShipping:"]},"913":{"name":"err","value":["BROWSER_USER_AGENT"]},"3230":{"name":"itm_qty","value":["1"]}},"sojournerAppFlagList":[{"bitpos":2,"value":false,"flagsetId":78},{"bitpos":1,"value":true,"flagsetId":78},{"bitpos":35,"value":false,"flagsetId":78},{"bitpos":36,"value":true,"flagsetId":78}]}};


/* GET home page. */
/*router.get('/', function(req, res) {
	mongoose.connect(mongoURL, function(error){
		if(error) {
			console.log("There is an error");
		}
	});
		
	console.log('mongoose readyState is ' + mongoose.connection.readyState);
	mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');    
    });
	
	
	var offer1 = new offerCollection({
		  sellerName : 'mountainsrgreat2010',
		  sellerFeedback :527,
		  itemId : '381064177054',
		  title: 'Sandy Starkman hippie boho floral sundress-Larg...',
		  imgUrl : "http://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/~OUAAOSwAL9UcqcQ/$_1.JPG?set_id=880000500F",
		  itemDesc : " This is an awesome movie",
		  listPrice : 20,
		offerPrice: 10,
		savingPrice:10,
		boughtQty:5,
		totalQty:100
		});
	
	offer1.save(function(err, offerValue) {
		  if (err) return console.error(err);
		//  console.log(offerValue);
		});
	
	offerCollection.find(function(err, thor) {
		  if (err) return console.error(err);
		  res.send(thor);
		});

});

router.get('/getOffer*', function(req,res){
	var itemIdVar = req.param("itemid");
	
	mongoose.connect(mongoURL, function(error){
		if(error) {
			console.log("There is an error");
		}
	});
	
	
	offerCollection.findOne({ itemId: itemIdVar}, function(err, thor) {
		  if (err) return console.error(err);
		  res.send(thor);
		 // console.dir(thor);
		});
});

router.get('/updateOffer*', function(req,res){
	var itemIdVar = req.param("itemid");
	
	mongoose.connect(mongoURL, function(error){
		if(error) {
			console.log("There is an error");
		}
	});
	        
	offerCollection.update(
			{itemId: itemIdVar},
			   { $inc: { boughtQty: 1} }, function(error, updatedValue){
					if(error) {
						console.log("There is an error");
					}
					
					offerCollection.findOne({ itemId: itemIdVar}, function(err, thor) {
						  if (err) return console.error(err);
						  res.send(thor);
						 // console.dir(thor);
						});				}
			);
    
}); */

router.post('/submitjson*', function(req, res) {
	console.log("Hi");
	var jsonReq = req.body.xorequest;
	var userName  = req.body.username;
    var MongoClient = mongodb.MongoClient;
    
    MongoClient.connect(mongoURL, function(err, db) {
        if (!err) {
        	
        	db.collection("test").update(
        			{username: userName},
        			   {jsonstr: jsonReq, username: userName, inuse : 0}, { upsert: true }, function(error, updatedValue){
        					if(error) {
        						console.log("There is an error");
        					}
        					console.log("updated value" + updatedValue);
        					db.collection("test").findOne({ username: userName}, function(err, thor) {
        						  if (err) return console.error(err);
        						  res.render('index',{ jsonresponse: { 'jsonReq' : jsonReq, 'userName': userName}});
        						 // console.dir(thor);
        						});				}
        			);
        	
            /*db.collection("test").insert({ "jsonstr": jsonReq, "username": userName, "inuse" : 0}, function(err, response) {
            	if(!err){
            		
            		res.render('index',{ jsonresponse: { 'jsonReq' : jsonReq, 'userName': userName}});
            		console.log("Data inserted");
            	} else {
            		console.log("Error inserting data");
            	}
            });*/
        }
    });
});

router.post('/loadjson*', function(req, res) {
	console.log("this is load");
	var userName  = req.body.username;
    var MongoClient = mongodb.MongoClient;
    
    MongoClient.connect(mongoURL, function(err, db) {
        if (!err) {
        	db.collection("test").findOne({ 'username' : userName}, function(err, dbresponse) {
      		  if (err) return console.error(err);
      		  console.dir(dbresponse);
      		  res.render('index',{ jsonresponse: { 'jsonReq' : dbresponse.jsonstr, 'userName': userName}});      		  
      		});
        }
    });
});

  router.get('/createjson*', function(req, res) {
	  console.log("Hi");
	  res.render('index');
	//res.redirect('index');
  });

module.exports = router;
