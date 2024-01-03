import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TerminalService } from '../../Services/terminal.service';
import { IData, IError, IIoError, ISocketError } from '../../Interfaces/Interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { LoadingComponent } from '../loading/loading.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoadingComponent, FormsModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(
    private service: TerminalService,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog,
    private http: HttpClient
  ) {}
  loading: boolean = false;
  searchCase: number;
  show:boolean = false;
  show2:boolean = false;
  search(id: number) {
    this.service.getListById(id).subscribe({
      next: (content: any) => {
        this.loading = true;
        this.openSnackBar('موارد با موفقیت یافت شد');
        this.List$ = of(content);
      },
      error: (e: any) => {
        this.loading = false;
        if (e.status == 404) {
          this.openSnackBar1('موردی یافت نشد');
          this.show = true;
          this.show2 = false;
        } else if (e.status == 500) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 0) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 400) {
          this.openSnackBar1('لطفا یک عدد معتبر وارد کنید');
          this.show = true;
          this.show2 = false;
        } else {
          this.openSnackBar1('خطای ناشناس');
        }
      },
    });
  }
  Convertor(text: string | undefined) {
    if (text === 'pulse') {
      return 'پالس';
    } else if (text === 'MBUS') {
      return 'امباس';
    } else if (text === 'ultrasonic') {
      return 'فرصوت';
    } else if (text === 'electromagnetic') {
      return 'الکترومغناطیس';
    } else if (text === 'data ok') {
      return 'تایید';
    } else if (text === 'crc error') {
      return 'سی ار سی نامعتبر';
    } else if (text === 'current usage') {
      return 'مصرف فعلی';
    } else if (text === 'hourly profile usage') {
      return 'پروفایل مصرف ساعتی';
    } else if (text === 'daily usage') {
      return 'مصرف روزانه';
    } else if (text === 'monthly usage') {
      return 'مصرف ماهانه';
    } else if (text === 'total usage') {
      return 'مصرف کل';
    } else if (text === 'simcard balance') {
      return 'بالانس سیمکارت';
    } else if (text === 'set setting') {
      return 'ثبت تنظیمات';
    } else if (text === 'set setting error') {
      return 'خطای ثبت تنظیمات';
    } else if (text === 'get setting') {
      return 'دریافت تنتظیمات';
    } else if (text === 'FOTA') {
      return 'بروزرسانی نرم افزار';
    } else if (text === 'FOTA updating') {
      return 'بروزرسانی نرم افزار';
    } else if (text === 'FOTA updating.') {
      return 'بروزرسانی نرم افزار';
    } else if (text === 'FOTA ok') {
      return 'بروزرسانی موفق';
    } else if (text === 'FOTA ok.') {
      return 'بروزرسانی موفق';
    } else if (text === 'FOTA error') {
      return 'خطای بروزرسانی';
    } else if (text === 'FOTA error.') {
      return 'خطای بروزرسانی';
    } else if (text === 'midnight data') {
      return 'دیتای شبانه';
    } else if (text === 'midnight data.') {
      return 'دیتای شبانه';
    } else if (text === 'hourly profile data') {
      return 'پروفایل ساعتی';
    } else if (text === 'hourly profile data.') {
      return 'پروفایل ساعتی';
    } else if (text === 'month data') {
      return 'دیتای ماهانه';
    } else if (text === 'month data.') {
      return 'دیتای ماهانه';
    } else if (text === 'queue data') {
      return 'کارکردهای ارسال نشده ناموفق';
    } else if (text === 'queue data.') {
      return 'کارکردهای ارسال نشده ناموفق';
    } else if (text === 'hourly queue data') {
      return 'کارکردهای ارسال نشده ناموفق ساعتی';
    } else if (text === 'hourly queue data.') {
      return 'کارکردهای ارسال نشده ناموفق ساعتی';
    } else if (text === 'check request data') {
      return 'دریافت فرمان های سرور';
    } else if (text === 'check request data.') {
      return 'دریافت فرمان های سرور';
    } else if (text === 'alarm data') {
      return 'الارم';
    } else if (text === 'alarm data.') {
      return 'الارم';
    } else if (text === 'test primary server') {
      return 'دریافت فرمان های سرور';
    } else if (text === 'test primary server.') {
      return 'دریافت فرمان های سرور';
    } else if (text === 'test backup server') {
      return 'تست سرور اصلی بک اپ';
    } else if (text === 'test backup server.') {
      return 'تست سرور اصلی بک اپ';
    } else if (text === 'firmware crc error') {
      return 'خطای محاسبه سی ار سی';
    } else if (text === 'firmware file size not match') {
      return 'اندازه فایل بسیار بزرگ است';
    } else if (text === 'firmware file size too big') {
      return 'اندازه فایل بسیار بزرگ است';
    } else if (text === 'firmware file not found') {
      return 'فایل در اف تی پی وجود ندارد';
    } else if (text === 'firmware file not saved') {
      return 'فایل در حافظه موقت ذخیره نشده';
    } else if (text === 'firmware FTP server error') {
      return 'فایل اف تی پی یا یوزرنیم و پسوورد مشکل دارد';
    } else if (text === 'power down') {
      return 'قطع توان دیتالاگر';
    } else if (text === 'power up') {
      return 'وصل مجدد توان دیتالاگر';
    } else if (text === 'rs485 configured') {
      return 'تنظیم با ار اس 485';
    } else if (text === 'EEPROM write error') {
      return 'خطای ذخیره اطلاعات در اپرام';
    } else if (text === 'magnetic field') {
      return 'میدان مغناطیسی';
    } else if (text === 'leak') {
      return 'نشتی';
    } else if (text === 'burest') {
      return 'ترکیدگی';
    } else if (text === 'displacement') {
      return 'جابجایی';
    } else if (text === 'reverse') {
      return 'جریان برگشتی اب';
    } else if (text === 'meter write disconnected') {
      return 'قطع سیم ارتباطی کنتور';
    } else if (text === 'box tamper open') {
      return 'باز شدن درب دیتالاگر';
    } else if (text === 'box tamper open.') {
      return 'باز شدن درب دیتالاگر';
    } else if (text === 'box tamper close') {
      return 'بسته شدن درب دیتالاگر';
    } else if (text === 'box tamper close.') {
      return 'بسته شدن درب دیتالاگر';
    } else if (text === 'meter open') {
      return 'باز شدن کنتور';
    } else if (text === 'meter open.') {
      return 'باز شدن کنتور';
    } else if (text === 'electrical current connected') {
      return 'وصل جریان الکتریکی';
    } else if (text === 'electrical current connected.') {
      return 'وصل جریان الکتریکی';
    } else if (text === 'tempered water flow detected') {
      return 'برداشت اب در هنگام اعمال دستور قطع تا قبل از وصل مجدد';
    } else if (text === 'tempered water flow detected.') {
      return 'برداشت اب در هنگام اعمال دستور قطع تا قبل از وصل مجدد';
    } else if (text === 'master key changed') {
      return 'تغییر مستر کی';
    } else if (text === 'master key changed.') {
      return 'تغییر مستر کی';
    } else if (text === 'empty pipe') {
      return 'خالی بودن لوله';
    } else if (text === 'credit simcard value') {
      return 'مقدار اعتبار سیمکارت';
    } else if (text === 'remaining water charge') {
      return 'مقدار سهمیه اب';
    } else if (text === 'successfull authentication') {
      return 'ثبت کاربری که با موفقیت احراز هویت شده و به سیستم دسترسی پیدا کرده';
    } else if (text === 'authentication failed') {
      return 'اهراز هویت ناموفق';
    } else if (text === 'operation key changed') {
      return 'تغییر کلید عملیات';
    } else if (text === 'secrete 1 for secure algorithm has changed') {
      return 'تغییر سکرت 1 برای الگوریتم';
    } else if (text === 'secrete 2 for secure algorithm has changed') {
      return 'تغییر سکرت 2 برای الگوریتم';
    } else if (text === 'clock adjusted') {
      return 'تغییر ساعت توسط ارتباط محلی';
    } else if (text === 'replace meter battery') {
      return 'زمان تعویض باتری فرا رسیده';
    } else if (text === 'battery lelse ife') {
      return 'اتمام عمر باتری';
    } else if (text === 'battery lelse ife.') {
      return 'اتمام عمر باتری';
    } else if (text === 'firmware activated') {
      return 'اعلان راه اندازی فیرمور جدید';
    } else if (text === 'firmware activated.') {
      return 'اعلان راه اندازی فیرمور جدید';
    } else if (text === 'application error') {
      return 'خطای منطقی یا فیزیکی';
    } else if (text === 'application error.') {
      return 'خطای منطقی یا فیزیکی';
    } else if (text === 'even log cleared') {
      return 'پاک شدن رویدادهای ثبت شده';
    } else if (text === 'even log cleared.') {
      return 'پاک شدن رویدادهای ثبت شده';
    } else if (text === 'EEPROM read error') {
      return 'خوادن اطلاعات از اپرام خطا دارد';
    } else if (text === 'EEPROM read error.') {
      return 'خواندن اطلاعات از اپرام خطا دارد';
    } else if (text === 'EEPROM checksum error') {
      return 'خطای چک سام اپرام';
    } else if (text === 'EEPROM checksum error.') {
      return 'خطای چک سام اپرام';
    } else if (text === 'alarm valve open') {
      return 'باز شدن شیر مکانیکی';
    } else if (text === 'alarm valve close') {
      return 'بسته شدن شیر مکانیکی';
    } else if (text === 'alarm valve not work') {
      return 'عدم عملکرد شیر مکانیکی';
    } else if (text === 'alarm temperature error (frozen)') {
      return 'خطای دمای محیط و یخ زدگی اب کنتور';
    } else if (text === 'credit assignment') {
      return 'تخصیص اعتبار جدید';
    } else if (text === 'flow rate exceeded') {
      return 'اعلان تجاوز بیشینه دبی لحظه ای روزانه از حد استانه';
    } else if (text === 'permitted volume threshold exceeded') {
      return 'اعلان رسیدن به استانه مجاز حجم برداشت اب';
    } else if (text === 'electrical current disconnected') {
      return 'اعلان تجاوز بیشینه دبی لحظه ای روزانه از حد استانه';
    } else if (text === 'no response from digital meter') {
      return 'عدم ارتباط با کنتور دیجیتال';
    } else if (text === 'replace datalogger-battery') {
      return 'زمان تعویض باتری دیتالاگر فرا رسیده';
    } else {
      return '';
    }
  }
  openModal(content: string | undefined): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { content: content },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
  title: string;
  openSnackBar1(message: string) {
    this._snackBar.open(message, '', {
      duration: 4000,
      panelClass: ['red-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 4000,
      panelClass: ['green-snackbar'],
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
  showcomponent1: boolean = true;
  showcomponent2: boolean = false;
  showcomponent3: boolean = false;
  showcomponent4: boolean = false;
  setView1() {
    this.service.getAllTerminalData().subscribe({
      next: (content: any) => {
        this.loading = true;
        this.openSnackBar('موارد با موفقیت یافت شد');
        this.List$ = of(content);
      },
      error: (e: any) => {
        this.loading = false;
        if (e.status == 404) {
          this.openSnackBar1('موردی یافت نشد');
          this.show2 = true;
          this.show = false;
        } else if (e.status == 500) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 0) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 400) {
          this.openSnackBar1('');
        } else {
          this.openSnackBar1('خطای ناشناس');
        }
      },
    });
    this.showcomponent1 = true;
    this.showcomponent2 = false;
    this.showcomponent3 = false;
    this.showcomponent4 = false;
  }
  setView2() {
    this.service.getAllTerminalError().subscribe({
      next: (content: any) => {
        this.loading = true;
        this.openSnackBar('موارد با موفقیت یافت شد');
        this.ErrorList$ = of(content);
      },
      error: (e: any) => {
        this.loading = false;
        if (e.status == 404) {
          this.openSnackBar1('موردی یافت نشد');
          this.show2 = true;
          this.show = false;
        } else if (e.status == 500) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 0) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 400) {
          this.openSnackBar1('');
        } else {
          this.openSnackBar1('خطای ناشناس');
        }
      },
    });
    this.showcomponent2 = true;
    this.showcomponent1 = false;
    this.showcomponent3 = false;
    this.showcomponent4 = false;
  }
  setView3() {
    this.service.getAllTerminalIoError().subscribe({
      next: (content: any) => {
        this.loading = true;
        this.openSnackBar('موارد با موفقیت یافت شد');
        this.IoList$ = of(content);
      },
      error: (e: any) => {
        this.loading = false;
        if (e.status == 404) {
          this.openSnackBar1('موردی یافت نشد');
          this.show2 = true;
          this.show = false;
        } else if (e.status == 500) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 0) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 400) {
          this.openSnackBar1('');
        } else {
          this.openSnackBar1('خطای ناشناس');
        }
      },
    });
    this.showcomponent3 = true;
    this.showcomponent1 = false;
    this.showcomponent2 = false;
    this.showcomponent4 = false;
  }
  setView4() {
    this.service.getAllTerminalSocketError().subscribe({
      next: (content: any) => {
        this.loading = true;
        this.openSnackBar('موارد با موفقیت یافت شد');
        this.SocketList$ = of(content);
      },
      error: (e: any) => {
        this.loading = false;
        if (e.status == 404) {
          this.openSnackBar1('موردی یافت نشد');
          this.show2 = true;
          this.show = false;
        } else if (e.status == 500) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 0) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 400) {
          this.openSnackBar1('');
        } else {
          this.openSnackBar1('خطای ناشناس');
        }
      },
    });
    this.showcomponent4 = true;
    this.showcomponent1 = false;
    this.showcomponent2 = false;
    this.showcomponent3 = false;
  }
  logout(){
    localStorage.removeItem("token_is_valid");
    window.location.href = 'http://accounts.sahmab.co/logout';
  }
  YesOrNo(char:number|undefined):string{
  if(char == 1){
    return "بله"
  }else{
    return "خیر"
  }
  }
  async handleAuth(): Promise<string> {
    // "key" Query String Parameter
    const urlParams = new URLSearchParams(window.location.search);
    const key = urlParams.get('key');
    if (key) {
      try {
        const response = await this.http.get<any>(`http://api.sahmab.co/accounts/loggedin-user?api_key=${key}`).toPromise();
        if (response.error === 0) {
          localStorage.setItem('token_is_valid', 'true');
          return 'http://terminal.sahmab.co/';
        }
      } catch (e) {
      }
      return 'http://accounts.sahmab.co/login';
    }

    // "token_is_valid" Local Storage Item
    const tokenIsValid = localStorage.getItem('token_is_valid');
    if (tokenIsValid !== null && tokenIsValid === 'true') {
      return '';
    }

    return 'http://accounts.sahmab.co/login';
  }
  List$: Observable<IData[]>;
  ErrorList$: Observable<IError[]>;
  IoList$: Observable<IIoError[]>;
  SocketList$: Observable<ISocketError[]>;
  ngOnInit(): void {
    this.handleAuth().then(redirectUrl => {
      if (redirectUrl !== '') {
        window.location.href = redirectUrl;
      }
    });
    
    this.service.getAllTerminalData().subscribe({
      next: (content: any) => {
        this.loading = true;
        this.openSnackBar('موارد با موفقیت یافت شد');
        this.List$ = of(content);
      },
      error: (e: any) => {
        this.loading = false;
        if (e.status == 404) {
          this.openSnackBar1('موردی یافت نشد');
          this.show = true;
          this.show2 = false;
        } else if (e.status == 500) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 0) {
          this.openSnackBar1('خطای سرور لطفا چند دقیقه دیگر تلاش کنید');
        } else if (e.status == 400) {
          this.openSnackBar1('');
        } else {
          this.openSnackBar1('خطای ناشناس');
        }
      },
    });
  }
}
