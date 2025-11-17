import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";
import { Download, QrCode, Trash } from "lucide-react";

const MAX_SIZE = 1048576;

export default function QRCodeGenerator() {
  const ref = useRef(null);
  const fileInputRef = useRef(null);
  const [pendingText, setPendingText] = useState("");
  const [pendingImage, setPendingImage] = useState(null);
  const [hasGenerated, setHasGenerated] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const qrCodeRef = useRef(null);

  useEffect(() => {
    qrCodeRef.current = new QRCodeStyling({
      width: 300,
      height: 300,
      type: "svg",
      margin: 10,
      dotsOptions: { color: "#000", type: "rounded" },
      backgroundOptions: { color: "#fff" },
      imageOptions: { crossOrigin: "anonymous", margin: 10 },
    });
    if (ref.current) {
      qrCodeRef.current.append(ref.current);
    }
  }, []);

  const handleGenerate = () => {
    setErrorText(null);
    qrCodeRef.current.update({
      data: pendingText,
      image: pendingImage || undefined,
    });
    setHasGenerated(true);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_SIZE) {
      setErrorText("Tamaño máximo 1MB");
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => setPendingImage(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleDeleteImage = (e) => {
    setPendingImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleDownload = () => {
    const now = new Date();
    const timestamp = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}-${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    qrCodeRef.current
      .download({
        name: "qr-code-" + timestamp,
        extension: "png",
      })
      .catch(() => {
        if (ref.current) {
          ref.current.innerHTML = "";
          setHasGenerated(false);
        }
        setErrorText("No se pudo descargar el QR. Inténta crearlo nuevamente.");
      });
  };

  const maxLength = 500;

  return (
    <div className="space-y-6 max-w-lg mx-auto w-full">
      {/* Input de texto */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-200">
          Texto o URL (500 caracteres máximo)
        </label>
        <input
          type="text"
          value={pendingText}
          onChange={(e) => setPendingText(e.target.value)}
          placeholder="Escribe el contenido del QR..."
          className="
            w-full px-4 py-2 rounded-lg border border-gray-300
            focus:ring-3 focus:ring-blue-500 focus: outline-0
            transition
          "
          maxLength={maxLength}
        />
        <p className="text-end">
          {pendingText ? pendingText.length : 0}/{maxLength}
        </p>
      </div>

      {/* Input de imagen */}
      <div className="flex flex-col space-y-2">
        <label className="text-sm font-medium text-gray-200">
          Imagen personalizada (opcional)
        </label>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="
            file:bg-gray-500 file:text-white file:border-0 file:px-4 file:py-2
            file:rounded-lg file:cursor-pointer
            hover:file:bg-gray-600
            cursor-pointer text-gray-400 text-sm
          "
        />

        {pendingImage && (
          <div className="flex justify-center items-center flex-col gap-2">
            <img
              src={pendingImage}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-md border"
            />
            <button
              onClick={handleDeleteImage}
              className="py-2 px-4 rounded-lg bg-gray-800 text-white font-medium
              hover:bg-black transition flex items-center gap-2"
            >
              <Trash />
              Eliminar
            </button>
          </div>
        )}
        {/* Botón de generar */}
        <button
          onClick={handleGenerate}
          disabled={!pendingText}
          className="
          mt-4 flex items-center gap-2 justify-center
          w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-medium
          hover:bg-blue-700 transition disabled:bg-gray-600 disabled:cursor-not-allowed
        "
        >
          <QrCode />
          {pendingText ? "Generar QR" : "Ingresa un texto para generar"}
        </button>

        {/* QR Code */}
        <div className={`flex justify-center ${hasGenerated ? "pt-4" : ""}`}>
          <div ref={ref} />
        </div>
        {hasGenerated && (
          <div className="flex justify-center pt-4">
            <button
              onClick={handleDownload}
              className="
              w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-medium
              hover:bg-blue-700 transition flex items-center gap-2 justify-center
            "
            >
              <Download size={20} />
              Descargar
            </button>
          </div>
        )}
        {errorText && (
          <p className="text-center text-rose-950 bg-rose-400 rounded-sm p-2">
            {errorText}
          </p>
        )}
      </div>
    </div>
  );
}
