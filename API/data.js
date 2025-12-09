// 50 ta mashina ro'yxati va kirish/chiqish vaqtlari
const carData = {
  "01A101AA": { entry: "08:00", exit: "12:00" },
  "10B102BB": { entry: "07:30", exit: "13:00" },
  "20C103CC": { entry: "09:00", exit: "15:45" },
  "30D104DD": { entry: "08:15", exit: "14:30" },
  "40E105EE": { entry: "10:00", exit: "16:00" },
  "50F106FF": { entry: "06:45", exit: "12:15" },
  "60G107GG": { entry: "09:20", exit: "14:50" },
  "70H108HH": { entry: "07:00", exit: "13:10" },
  "80I109II": { entry: "08:30", exit: "15:00" },
  "90J110JJ": { entry: "10:15", exit: "17:30" },
  "95K111KK": { entry: "08:50", exit: "15:50" },
  "01L112LL": { entry: "07:10", exit: "12:30" },
  "10M113MM": { entry: "09:45", exit: "16:00" },
  "20N114NN": { entry: "08:25", exit: "14:10" },
  "30O115OO": { entry: "07:50", exit: "13:20" },
  "40P116PP": { entry: "09:10", exit: "15:00" },
  "50Q117QQ": { entry: "08:00", exit: "13:30" },
  "60R118RR": { entry: "07:40", exit: "12:50" },
  "70S119SS": { entry: "09:05", exit: "15:15" },
  "80T120TT": { entry: "08:20", exit: "14:40" },
  "90U121UU": { entry: "07:35", exit: "12:55" },
  "95V122VV": { entry: "09:00", exit: "15:30" },
  "01W123WW": { entry: "08:10", exit: "14:00" },
  "10X124XX": { entry: "07:50", exit: "13:20" },
  "20Y125YY": { entry: "09:30", exit: "15:50" },
  "30Z126ZZ": { entry: "08:00", exit: "13:40" },
  "40A127AA": { entry: "07:45", exit: "13:10" },
  "50B128BB": { entry: "09:15", exit: "15:45" },
  "60C129CC": { entry: "08:25", exit: "14:35" },
  "70D130DD": { entry: "07:55", exit: "13:25" },
  "80E131EE": { entry: "09:05", exit: "15:15" },
  "90F132FF": { entry: "08:10", exit: "14:20" },
  "95G133GG": { entry: "07:35", exit: "12:55" },
  "01H134HH": { entry: "09:00", exit: "15:00" },
  "10I135II": { entry: "08:20", exit: "14:30" },
  "20J136JJ": { entry: "07:50", exit: "13:10" },
  "30K137KK": { entry: "09:15", exit: "15:45" },
  "40L138LL": { entry: "08:25", exit: "14:40" },
  "50M139MM": { entry: "07:55", exit: "13:20" },
  "60N140NN": { entry: "09:05", exit: "15:25" },
  "70O141OO": { entry: "08:10", exit: "14:10" },
  "80P142PP": { entry: "07:40", exit: "13:00" },
  "90Q143QQ": { entry: "09:30", exit: "15:50" },
  "95R144RR": { entry: "08:00", exit: "14:20" },
  "01S145SS": { entry: "07:55", exit: "13:10" },
  "10T146TT": { entry: "09:10", exit: "15:35" },
  "20U147UU": { entry: "08:20", exit: "14:40" },
  "30V148VV": { entry: "07:50", exit: "13:20" },
  "40W149WW": { entry: "09:00", exit: "15:15" },
  "50X150XX": { entry: "08:05", exit: "14:05" },
};

// API funksiyasi
function checkCarNumber(number) {
  const key = number.toUpperCase();
  return new Promise((resolve) => {
    setTimeout(() => {
      if (carData[key]) {
        resolve({
          exists: true,
          entry: carData[key].entry,
          exit: carData[key].exit,
        });
      } else {
        resolve({ exists: false });
      }
    }, 300);
  });
}
