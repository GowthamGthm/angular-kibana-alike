import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Utility } from './utils/Utility';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private toastr: ToastrService) { }

  fileContent: string = '';
  searchText: string = "";
  fileContentArray: string[] = [];
  searchedFileKeyArray: string[] = [];

  public onFileChange(fileList: FileList): void {
    let file = fileList[0];
    var fileExtension = this.extractFileExtension(file.name);
    this.resetContent();

    if (fileExtension !== ".txt") {
      this.toastr.error("only txt file allowed");
      return;
    }

    let fileReader: FileReader = new FileReader();
    fileReader.onloadend = (event) => {
      console.log("load start");
      // console.log(event.target.result);
      this.fileContent = event.target.result.toString();
      console.log("load end");
      this.parseFileContent(this.fileContent);
    };

    fileReader.readAsText(file);
  }


  extractFileExtension(fileName: string) {
    let fileExtension = fileName.substr(fileName.lastIndexOf('.'));
    return fileExtension;
  }

  parseFileContent(fileContentString: string) {
    this.fileContentArray = fileContentString.split("\n");
    // this.fileContentArray = fileContentString.split("/\r\n|\r|\n/");
  }

  resetContent() {
    this.fileContent = '';
    this.searchText = "";
  }

  resetPage(resetPage : NgForm){
    this.fileContent = '';
    this.searchText = "";
    this.searchedFileKeyArray=[];
    this.fileContentArray=[];
    resetPage.form.reset();
  }

  proccessSearch() {
    if (Utility.isArrayNullOrEmpty(this.fileContentArray)) {
      console.log("input is empty");
      return [];
    }
    if (Utility.isStringNullorEmpty(this.searchText)) {
      console.log("search key empty");
      return this.fileContentArray;
    }

    let foundKeysArray: string[] = this.fileContentArray.filter((ele: string) => ele.toUpperCase().includes(this.searchText.toUpperCase()));
    foundKeysArray = (Utility.isArrayNullOrEmpty(foundKeysArray)) ? [] : foundKeysArray;
    console.log("lengh after search :", foundKeysArray.length);
    this.searchedFileKeyArray = foundKeysArray;
  }

}
