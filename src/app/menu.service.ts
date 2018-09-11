import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuService {


  productsAndServices = [
    ['Products & Home >', 'productsAndHome'],
    ['Networking', 'networking'],
    ['Mobile & Wireless', 'mobileAndWireless'],
    ['Security', 'security'],
    ['Collabration', 'collabration'],
    ['Data center', 'dataCenter'],
    ['Cloud', 'cloud'],
    ['By Industry', 'byIndustry'],
    ['By Company Type', 'byCompanyType'],
    ['Cisco Services', 'ciscoServices']
  ];

  supportAndDownloads = [
    ['Support Home >', 'supportHome'],
    ['Products & Downloads', 'productsAndDownloads'],
    ['Contact Support', 'contactSupport'],
    ['License & Contracts', 'licenseAndContracts'],
    ['Tools & Resources', 'toolsAndResources']
  ];
  trainingAndEvents = [
    ['training & Events Home >', 'trainingAndEvents'],
    ['Training', 'training'],
    ['Certifications', 'certifications'],
    ['Exams', 'exams'],
    ['Training by Technology', 'trainingByTechnology'],
    ['Events & Webinars', 'eventsAndWebinars']
  ];
  buy = [
    ['Ordering home >', 'orderingHome'],
    ['How to Buy', 'How to Buy'],
    ['Services', 'services'],
    ['Remanufactured Process', 'remanufacturedProcess'],
    ['financing', 'financing']
  ];
  partners = [
    ['partners Home >', 'partnersHome'],
    ['Our Partners', 'ourPartners'],
    ['Channel Partner Program', 'channelPartnerProgram'],
    ['Partner Certifications & Specializations', 'partnerCertificationsAndSpecializations'],
    ['Market & Shell', 'marketAndShell'],
    ['Partner Support', 'partnerSupport'],
    ['Partner Tools', 'partnerTools']
  ];

  constructor(
  ) {
  }



}
