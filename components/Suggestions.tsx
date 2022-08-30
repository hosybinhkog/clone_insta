import { NextPage } from "next";
import React, { useState } from "react";
import { Suggestion } from "../types";

const Suggestions: NextPage = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  return <div>Suggestions</div>;
};

export default Suggestions;
