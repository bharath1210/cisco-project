import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class SubMenuItems {
    productsAndHome: any;
    networking = {
        top: [
            ['Intent-Based Networking', 'Intent'],
            ['Network Articheture-Cisco DNA', 'Network-DNA'],
            ['Network Articheture-Cisco ACI', 'Network-ACI'],
            ['Switches', 'Switches'],
            ['Routers', 'Routers'],
            ['Network Security', 'Network-Security'],
            ['Network Software', 'Network-Software']
        ].map(itemText => [itemText, '#']),
        bottom: [
            ['Automated wired and wireless network policy', 'Network-Policy'],
            ['Simplify branch and WAN network operations', 'WAN'],
            ['Address maiware and cyberthreats', 'cyberThreats'],
            ['Assure network avalibility and perfomance', 'Perfomance']
        ].map(itemText => [itemText, '#']),
        right: [
            ['Catalyst 9000 Family Switches', 'Family-Switches'],
            ['4000 Series Integrated Service Router', 'Service-Router'],
            ['Aironet 4800 Series Access Points', 'Aironet'],
            ['DNA Center', 'DNA-Center'],
            ['Nexus 9000 Series Switches', 'Nexus']
        ].map(itemText => [itemText, '#'])
    };

    mobileAndWireless = {
        top: ['Wireless Mobility',
            'Indoor Access Point',
            'Ourdoor And Industrail Acess Point',
            'Wireless LAN Controllers',
            'Internet on Things(IoT)',
            'Services For Mobility And Wireless',
            'Mobile Internet For Service Providers'
        ].map(itemText => [itemText, '#']),
        bottom: [
            'Automated wired wnd wireless network policy',
            'Deliver personalized location-based Services',
            'Upgrade to 802.11ac Wave 2',
            'Simplify WI-FI deployment'
        ].map(itemText => [itemText, '#']),
        right: [
            'Aironet 4800 Series Access Points',
            'Aironet 3800 Series Access Points',
            'Aironet 1815 Series Access Points',
            'Aironet Active Sensor',
            '3504 Wireless Controller'
        ].map(itemText => [itemText, '#'])
    };

    security = {
        top: [
            'Next-Generation Firewalls',
            'Advanced Malware Protection(AMP)',
            'Email Security',
            'End point Security',
            'Cloud Security',
            'Services for Security',
            'Security for Service Providers'
        ].map(itemText => [itemText, '#']),
        bottom: [
            'Protect against ransomware',
            'Secure my data center',
            'Explore Cisco security Portfolio'
        ].map(itemText => [itemText, '#']),
        right: [
            'AnyConnect Secure Mobility Client(VPN)',
            'Firepower 2100 series',
            'Identify Service Engine(ISE)',
            'stealthwatch Enterprises'
        ].map(itemText => [itemText, '#'])
    };

    collabration = {
        top: [
            'Conferencing',
            'Contact Center',
            'Phones and Video Devices',
            'Unified Communications',
            'Services for Collabration'
        ].map(itemText => [itemText, '#']),
        bottom: [
            'Find Case Studies',
            'Learn about meeting solutions',
            'Review analyst reports',
            'Explore solutions for midsize businesses'
        ].map(itemText => [itemText, '#']),
        right: [
            'IP Phones',
            'Unified Communications Manager',
            'Webex meetings',
            'Webex Teams'
        ].map(itemText => [itemText, '#'])
    };

    dataCenter = {
        top: [
            'Data Center Switching',
            'Network Architecture- Cisco ACI',
            'Servers Unified Computing',
            'Hyperconverged Infrastructure',
            'Analytics and Assurance',
            'Application',
            'Services'
        ].map(itemText => [itemText, '#']),
        bottom: [
            'Automate my network with SDN',
            'Converge my infrastructure',
            'Deploy infrastructure for big data'
        ].map(itemText => [itemText, '#']),
        right: [
            'Nexus 9000 Series Switches',
            'Cisco HyperFlex',
            'Cisco ACI',
            'Cisco Tetration',
            'Cisco Intersight'
        ].map(itemText => [itemText, '#'])
    };

    cloud = {
        top: [
            'Private Cloud Solutions',
            'Hybrid and Public Cloud Solutions',
            'Cloud Professional Services',
            'Cloud for Service Providers'
        ].map(itemText => [itemText, '#']),
        bottom: [
            'Simplify how I manage containers',
            'Manage application across my clouds',
            'Connect simply to public clouds',
            'Build a cloud strategy',
            'Secure my cloud data and applications'
        ].map(itemText => [itemText, '#']),
        right: [
            'Cisco Hybrid Cloud platform for Google cloud',
            'Cisco container platform',
            'Cisco CloudCenter',
            'Cloud Unfiltered podcasts',
            'Design Zone for Cloud'
        ].map(itemText => [itemText, '#'])
    };

    byIndustry = {
        top: [
            'Cities and Communication',
            'Energy',
            'Educations',
            'Financial Services',
            'Government',
            'Healthcare',
            'Manufacturing',
            'Retail',
            'Sports and Entertainment',
            'Transportation'
        ].map(itemText => [itemText, '#'])
    };

    byCompanyType = {
        top: [
            'Products and Solutions',
            'Support',
            'All small Business >'
        ].map(itemText => [itemText, '#']),
        bottom: [
            'Products',
            'Solutions',
            'All midsize Business >'
        ].map(itemText => [itemText, '#']),
        right: [
            'Products and Solutions',
            'Evolved Programmable Network(EPN)',
            'Orchestration and Automation',
            'Mobile Internet',
            'Security Solutions',
            'All Service Providers >'
        ].map(itemText => [itemText, '#'])
    };

    ciscoServices = {
        top: [
            'Advisory',
            'Implementation',
            'Training',
            'Optimization',
            'Managed',
            'Technical',
            'Service Providers'
        ].map(itemText => [itemText, '#']),
        right: [
            'cloud',
            'collabration',
            'Data Center and Virtualization',
            'Networking',
            'Routers',
            'Security',
            'Service Providers',
            'Switching',
            'Unified Computing',
            'Wireless'
        ].map(itemText => [itemText, '#'])
    };

    constructor() {
        this.productsAndHome = this.networking;
    }
}
