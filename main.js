document.getElementById("checkBtn").addEventListener("click", checkNumber);
document.getElementById("refreshBtn").addEventListener("click", refreshData);

const regionInput = document.getElementById("region");
const seriesInput = document.getElementById("series");
const numberInput = document.getElementById("number");
const suffixInput = document.getElementById("suffix");
const messageDiv = document.getElementById("message");

// Avtomatik keyingi inputga o'tish
regionInput.addEventListener("input", () => {
  if (regionInput.value.length >= regionInput.maxLength) seriesInput.focus();
});
seriesInput.addEventListener("input", () => {
  if (seriesInput.value.length >= seriesInput.maxLength) numberInput.focus();
});
numberInput.addEventListener("input", () => {
  if (numberInput.value.length >= numberInput.maxLength) suffixInput.focus();
});

// Formatni tekshirish
function validateCarNumber(number) {
  const pattern = /^(01|10|20|30|40|50|60|70|80|90|95)[A-Z]\d{3}[A-Z]{2}$/;
  return pattern.test(number.toUpperCase());
}

// Tekshirish funksiyasi
async function checkNumber() {
  const region = regionInput.value.trim().toUpperCase();
  const series = seriesInput.value.trim().toUpperCase();
  const number = numberInput.value.trim();
  const suffix = suffixInput.value.trim().toUpperCase();

  if (!region || !series || !number || !suffix) {
    messageDiv.style.color = "red";
    messageDiv.textContent = "Iltimos, barcha maydonlarni to'ldiring!";
    return;
  }

  const carNumber = `${region}${series}${number}${suffix}`;

  if (!validateCarNumber(carNumber)) {
    messageDiv.style.color = "red";
    messageDiv.textContent = "Mashina raqami noto'g'ri formatda!";
    return;
  }

  try {
    const data = await checkCarNumber(carNumber);

    if (data.exists) {
      const [entryH, entryM] = data.entry.split(":").map(Number);
      const [exitH, exitM] = data.exit.split(":").map(Number);

      const entryMinutes = entryH * 60 + entryM;
      const exitMinutes = exitH * 60 + exitM;

      let durationHours = (exitMinutes - entryMinutes) / 60;
      let fee = 5000;

      if (durationHours > 5) {
        const extraHours = Math.ceil(durationHours - 5);
        fee += extraHours * 500;
      }

      durationHours = durationHours.toFixed(2);

      messageDiv.style.color = "green";
      messageDiv.innerHTML = `
                <b>${carNumber}</b> mashinasi parkovkada.<br>
                Kirgan vaqti: ${data.entry}<br>
                Chiqqan vaqti: ${data.exit}<br>
                Umumiy vaqt: ${durationHours} soat<br>
                To'lov: ${fee} so'm
            `;
    } else {
      messageDiv.style.color = "red";
      messageDiv.textContent = "Mashina ro'yxatda yo'q";
    }
  } catch (error) {
    console.error(error);
    messageDiv.style.color = "red";
    messageDiv.textContent = "Xatolik yuz berdi!";
  }
}

// Yangilash funksiyasi
function refreshData() {
  regionInput.value = "";
  seriesInput.value = "";
  numberInput.value = "";
  suffixInput.value = "";
  messageDiv.textContent = "";
  regionInput.focus();
}
