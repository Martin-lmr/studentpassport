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

// Define the types
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

  // Calculate stats based on the current state of tasks
  const totalTasks = Object.values(tasks).flat().length;
  const completedTasks = Object.values(tasks).flat().filter(task => task.done).length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  const toggleTask = (category: Category, index: number) => {
    setTasks(prev => ({
      ...prev,
      [category]: prev[category].map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      ),
    }));
  };

  const resetTasks = () => {
    setTasks(prev => {
      const newTasks = {} as TasksState;
      (Object.keys(prev) as Category[]).forEach(category => {
        newTasks[category] = prev[category].map(task => ({ ...task, done: false }));
      });
      return newTasks;
    });
  };

  const checkAll = () => {
    setTasks(prev => {
      const newTasks = {} as TasksState;
      (Object.keys(prev) as Category[]).forEach(category => {
        newTasks[category] = prev[category].map(task => ({ ...task, done: true }));
      });
      return newTasks;
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-beige text-noir px-4 py-12">
      <div className="max-w-3xl w-full bg-white p-10 rounded-xl shadow-xl">
        {/* Titre + intro */}
        <h1 className="text-4xl font-bold mb-2 text-center">Ma Checklist Étudiant ✈️</h1>
        <p className="text-noir/70 mb-8 text-center">
          Garde le cap ! Cette checklist regroupe toutes les étapes clés pour bien t’installer dans ta nouvelle ville.
        </p>

        {/* Progression */}
        <div className="mb-8 text-center">
          <span className="inline-block mb-3 px-4 py-1 rounded-full text-sm font-semibold bg-marine/20 text-marine">
            {completedTasks === totalTasks
              ? "Checklist complétée 🎉"
              : completedTasks > totalTasks / 2
              ? "En bonne voie 🚀"
              : "Courage, tu avances 💪"}
          </span>
          <p className="mb-2">{completedTasks}/{totalTasks} tâches complétées</p>
          <div className="w-full bg-noir/10 h-3 rounded-full overflow-hidden">
            <div
              className="bg-marine h-3 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Boutons globaux */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={checkAll}
            className="px-4 py-2 bg-marine hover:bg-marine-light rounded-lg text-white text-sm font-medium transition"
          >
            Tout cocher
          </button>
          <button
            onClick={resetTasks}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white text-sm font-medium transition"
          >
            Réinitialiser
          </button>
        </div>

        {/* Liste des catégories */}
        {(Object.keys(tasks) as Category[]).map(category => {
          const list = tasks[category];
          return (
            <div key={category} className="mb-8">
              <h2 className="text-2xl font-semibold mb-2 capitalize">{category}</h2>
              <p className="text-noir/70 mb-4 text-sm">
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
                        ? "bg-marine/20 text-noir line-through"
                        : "bg-beige hover:bg-beige-light shadow-sm border border-noir/10"
                    }`}
                  >
                    <span className="text-marine">{task.icon}</span>
                    <span>{task.text}</span>
                    {task.done && (
                      <CheckCircleIcon className="h-5 w-5 text-marine ml-auto" />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}