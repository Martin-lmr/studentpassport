"use client";
import { useState } from "react";
import {
  CheckCircleIcon,
  HomeIcon,
  ClipboardIcon,
  UserGroupIcon,
  BanknotesIcon,
  PhoneIcon,
  BuildingOfficeIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/solid";

type Category = "logement" | "administratif" | "quotidien";

type Task = {
  text: string;
  done: boolean;
  icon: JSX.Element;
};

type TasksState = Record<Category, Task[]>;

export default function ChecklistPage() {
  const [tasks, setTasks] = useState<TasksState>({
    logement: [
      { text: "Trouver un logement", done: false, icon: <HomeIcon className="h-5 w-5" /> },
      { text: "Signer le bail", done: false, icon: <ClipboardIcon className="h-5 w-5" /> },
      { text: "Souscrire à l'assurance habitation", done: false, icon: <ShieldCheckIcon className="h-5 w-5" /> }
    ],
    administratif: [
      { text: "Ouvrir un compte bancaire", done: false, icon: <BanknotesIcon className="h-5 w-5" /> },
      { text: "Demander la carte de transport étudiant", done: false, icon: <ClipboardIcon className="h-5 w-5" /> },
      { text: "Vérifier l'assurance santé", done: false, icon: <ShieldCheckIcon className="h-5 w-5" /> }
    ],
    quotidien: [
      { text: "Acheter une carte SIM locale", done: false, icon: <PhoneIcon className="h-5 w-5" /> },
      { text: "Repérer les supermarchés", done: false, icon: <BuildingOfficeIcon className="h-5 w-5" /> },
      { text: "Rejoindre un groupe étudiant", done: false, icon: <UserGroupIcon className="h-5 w-5" /> }
    ]
  });

  const totalTasks = Object.values(tasks).flat().length;
  const completedTasks = Object.values(tasks).flat().filter(t => t.done).length;
  const progress = (completedTasks / totalTasks) * 100;

  // ✅ Correction ici
  const toggleTask = (category: Category, index: number) => {
    setTasks((prev: TasksState) => {
      return {
        ...prev,
        [category]: prev[category].map((task, i) =>
          i === index ? { ...task, done: !task.done } : task
        ),
      };
    });
  };

  const resetTasks = () => {
    setTasks(prev => {
      const copy: TasksState = { ...prev };
      (Object.keys(copy) as Category[]).forEach(cat => {
        copy[cat] = copy[cat].map(task => ({ ...task, done: false }));
      });
      return copy;
    });
  };

  const checkAll = () => {
    setTasks(prev => {
      const copy: TasksState = { ...prev };
      (Object.keys(copy) as Category[]).forEach(cat => {
        copy[cat] = copy[cat].map(task => ({ ...task, done: true }));
      });
      return copy;
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-3xl w-full bg-gray-900 p-10 rounded-xl shadow-xl">
        
        {/* Titre + intro */}
        <h1 className="text-4xl font-bold mb-2 text-center">Ma Checklist Étudiant ✈️</h1>
        <p className="text-gray-400 mb-8 text-center">
          Garde le cap ! Cette checklist regroupe toutes les étapes clés pour bien t’installer dans ta nouvelle ville.
        </p>

        {/* Progression */}
        <div className="mb-8 text-center">
          <span className="inline-block mb-3 px-4 py-1 rounded-full text-sm font-semibold bg-green-600/20 text-green-400">
            {completedTasks === totalTasks
              ? "Checklist complétée 🎉"
              : completedTasks > totalTasks / 2
              ? "En bonne voie 🚀"
              : "Courage, tu avances 💪"}
          </span>
          <p className="mb-2">{completedTasks}/{totalTasks} tâches complétées</p>
          <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
            <div
              className="bg-green-500 h-3 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Boutons globaux */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={checkAll}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-sm font-medium transition"
          >
            Tout cocher
          </button>
          <button
            onClick={resetTasks}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition"
          >
            Réinitialiser
          </button>
        </div>

        {/* Liste des catégories */}
        {(Object.entries(tasks) as [Category, Task[]][]).map(([category, list]) => (
          <div key={category} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 capitalize">{category}</h2>
            <p className="text-gray-400 mb-4 text-sm">
              {category === "logement" &&
                "Un bon logement, c’est la base de ton confort au quotidien."}
              {category === "administratif" &&
                "Ces démarches te permettent d’être en règle et d’éviter les mauvaises surprises."}
              {category === "quotidien" &&
                "Ces petits détails font toute la différence pour t’intégrer rapidement."}
            </p>
            <ul className="space-y-3">
              {list.map((task, i) => (
                <li
                  key={i}
                  onClick={() => toggleTask(category, i)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
                    task.done
                      ? "bg-green-200 text-black line-through"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                >
                  <span className="text-green-400">{task.icon}</span>
                  <span>{task.text}</span>
                  {task.done && (
                    <CheckCircleIcon className="h-5 w-5 text-green-600 ml-auto" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
