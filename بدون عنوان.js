window.addEventListener("load", () => {
  const box = document.createElement("div");
  const closeBtn = document.createElement("span");

  // نص الرسالة
  box.innerText = "اقرأ وسبّح بنية المرحوم";

  // إعدادات المربع
  Object.assign(box.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#333",
    color: "#FFD700",
    padding: "15px 40px 15px 15px",
    borderRadius: "8px",
    opacity: "0",
    transition: "opacity 3s",
    fontFamily: "Arial, sans-serif",
    zIndex: 9999,
    maxWidth: "250px",
    lineHeight: "1.4",
  });

  // إعدادات زر الإغلاق
  closeBtn.innerText = "×";
  Object.assign(closeBtn.style, {
    position: "absolute",
    top: "5px",
    right: "10px",
    cursor: "pointer",
    color: "#FFD700",
    fontSize: "18px",
    fontWeight: "bold"
  });

  // الحدث عند الضغط على X
  closeBtn.addEventListener("click", () => {
    box.remove();
  });

  // إضافة الزر للمربع، ثم المربع للصفحة
  box.appendChild(closeBtn);
  document.body.appendChild(box);

  // تشغيل الانتقال التدريجي
  setTimeout(() => {
    box.style.opacity = "1";
  }, 100);
});