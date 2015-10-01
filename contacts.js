/**
 * Created by Gilbert on 10/1/2015.
 */
/**
 * This file contains functions that deal with a contact list data set.
 */
/* globals _ */
/* exported contact, contactList, addContact, numContacts, findContact, deleteContact */
/* exported listContact, contactList, philip, henri, edo, kim  */
/**
 * This is a object constructor for a contact object.  It contains information such as: firstName, lastName, address, zipcode, telephoneNumber, and keeps track of number of calls
 * @param firstName
 * @param lastName
 * @param address
 * @param zipcode
 * @param telephoneNumber
 * @constructor  creates a contact object
 */
function contact(firstName, lastName, address, zipcode, telephoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.address = address;
  this.zipcode = zipcode;
  this.telephoneNumber = telephoneNumber;
  var calls = 0;
  this.call = function () {
    calls += 1;
    return true;
  };
  this.numCalls = function () {
    return calls;
  };
}
/**
 * This ia an object constructor for a contactList object that contains analytical functions for this object.
 * @constructor  creates a contactList object
 */
function contactList() {
  /**
   * This creates an empty contacts array to be made into a contactList
   * @type {Array}
   */
  var contacts = [];
  /**
   * Adds a new contact object to the array of contacts
   * @param Contact
   */
  this.addContact = function (Contact) {
    contacts.push(Contact);
  };
  /**
   * Calculates the total amount of contacts in the contact array
   * @returns total amount of contacts in contact array
   */
  this.numContacts = function () {
    return contacts.length;
  };
  /**
   * Searches through contact array for contact that has a matching provided lastName
   * @param Last
   * @returns the contact objects that have the matching lastName
   */
  this.findContact = function (Last) {
    var sameLast = [];
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].lastName === Last) {
        sameLast.push(contacts[i]);
      }
    }
    return sameLast;
  };
  /**
   * Removes the contact with the matching first and last name from the contact array
   * @param first
   * @param last
   */
  this.deleteContact = function (first, last) {
    for (var j = 0; j < contacts.length; j++) {
      if (contacts[j].lastName === last && contacts[j].firstName === first) {
        contacts.splice(j - 1, j + 1);
      }
    }
  };
  /**
   * Returns a list of contact names (first and last) sorted by their lastName
   * @returns a list of
   */
  this.listContacts = function () {
    var newContact = _.pluck(this.contacts, "lastName");
    return (_.sortBy(newContact)).toString();
  };
}


