import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Save, Sparkles } from "lucide-react";

export function CreateTournament() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    fechaInicio: "",
    fechaFin: "",
    categoria: "Secundaria",
    reglas: "",
    ubicacion: "Coliseo Cerrado Wanka",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    navigate("/dashboard/torneos");
  };

  const generateAIAssistance = () => {
    setFormData((prev) => ({
      ...prev,
      reglas: `Reglamento generado por IA para ${prev.categoria}:
1. Los robots deben medir máximo 20x20x20 cm.
2. Peso máximo permitido: 1.5 kg.
3. Prohibido el uso de armas punzocortantes o fuego.
4. El tiempo de combate es de 3 minutos por ronda.
5. Los jueces podrán detener el combate si hay riesgo de seguridad.`,
    }));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center space-x-4 mb-6">
        <Link
          to="/dashboard/torneos"
          className="inline-flex items-center justify-center rounded-md text-slate-500 hover:text-slate-900 transition-colors p-2 hover:bg-slate-100"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Volver</span>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Crear torneo</h1>
          <p className="text-sm text-slate-500">Configura los detalles principales y reglas del evento.</p>
        </div>
      </div>

      <div className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="p-6 md:p-8 space-y-8">
            {/* Sección: Detalles Generales */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 border-b border-slate-100 pb-2">
                Detalles Generales
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2 space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-slate-700 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nombre del torneo <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Ej. Torneo de Robótica Wanka 2026"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="fechaInicio" className="text-sm font-medium text-slate-700 leading-none">
                    Fecha de inicio <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fechaInicio"
                    type="date"
                    required
                    value={formData.fechaInicio}
                    onChange={(e) => setFormData({ ...formData, fechaInicio: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="fechaFin" className="text-sm font-medium text-slate-700 leading-none">
                    Fecha de fin <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fechaFin"
                    type="date"
                    required
                    value={formData.fechaFin}
                    onChange={(e) => setFormData({ ...formData, fechaFin: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="categoria" className="text-sm font-medium text-slate-700 leading-none">
                    Categoría
                  </label>
                  <select
                    id="categoria"
                    value={formData.categoria}
                    onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Primaria">Educación Primaria (6-11 años)</option>
                    <option value="Secundaria">Educación Secundaria (12-16 años)</option>
                    <option value="Universitaria">Universitaria / Superior</option>
                    <option value="Libre">Categoría Libre</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="ubicacion" className="text-sm font-medium text-slate-700 leading-none">
                    Sede / Ubicación
                  </label>
                  <input
                    id="ubicacion"
                    type="text"
                    value={formData.ubicacion}
                    onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
                    className="flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Lugar del evento"
                  />
                </div>
              </div>
            </div>

            {/* Sección: Reglas */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  Reglas del torneo
                </h3>
                <button
                  type="button"
                  onClick={generateAIAssistance}
                  className="inline-flex items-center text-xs font-medium text-purple-700 bg-purple-100 hover:bg-purple-200 px-3 py-1.5 rounded-full transition-colors"
                >
                  <Sparkles className="h-3 w-3 mr-1.5" />
                  Generar con IA
                </button>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-slate-500 mb-2">
                  Especifique las reglas del torneo, restricciones de diseño de robots y criterios de puntuación.
                </p>
                <textarea
                  id="reglas"
                  rows={6}
                  value={formData.reglas}
                  onChange={(e) => setFormData({ ...formData, reglas: e.target.value })}
                  className="flex w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                  placeholder="1. Medidas máximas...&#10;2. Peso permitido...&#10;3. Infracciones y penalidades..."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-4 border-t border-slate-200 bg-slate-50 p-6">
            <Link
              to="/dashboard/torneos"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 hover:bg-slate-100 text-slate-700 h-10 px-4 py-2 border border-slate-300"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 shadow-sm"
            >
              <Save className="mr-2 h-4 w-4" />
              Guardar Torneo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
