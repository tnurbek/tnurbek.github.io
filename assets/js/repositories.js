"use strict";

(function () {
  const formatNumber = (value) => {
    if (typeof value !== "number") return "--";
    return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value);
  };

  const setText = (root, selector, value) => {
    const el = root.querySelector(selector);
    if (el) el.textContent = value;
  };

  const fetchJson = async (url) => {
    const response = await fetch(url, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
    return response.json();
  };

  const hydrateRepoCard = async (card) => {
    const repo = card.dataset.repo;
    if (!repo) return;

    try {
      const data = await fetchJson(`https://api.github.com/repos/${repo}`);
      const description = data.description || "No description provided.";

      const desc = card.querySelector(".repo-card-desc");
      if (desc) desc.textContent = description;

      setText(card, '[data-field="stars"]', formatNumber(data.stargazers_count));
      setText(card, '[data-field="forks"]', formatNumber(data.forks_count));
      setText(card, '[data-field="language"]', data.language || "N/A");
    } catch (_error) {
      const desc = card.querySelector(".repo-card-desc");
      if (desc) desc.textContent = "Unable to load details right now.";
    }
  };

  const hydrateUserCard = async (card) => {
    const user = card.dataset.user;
    if (!user) return;

    try {
      const data = await fetchJson(`https://api.github.com/users/${user}`);
      const bio = data.bio || `GitHub profile for ${user}.`;

      const desc = card.querySelector(".repo-card-desc");
      if (desc) desc.textContent = bio;

      setText(card, '[data-field="repos"]', `${formatNumber(data.public_repos)} repos`);
      setText(card, '[data-field="followers"]', `${formatNumber(data.followers)} followers`);
      setText(card, '[data-field="following"]', `${formatNumber(data.following)} following`);
    } catch (_error) {
      const desc = card.querySelector(".repo-card-desc");
      if (desc) desc.textContent = "Unable to load profile details right now.";
    }
  };

  const boot = () => {
    const page = document.querySelector(".repositories-page");
    if (!page) return;

    const repoCards = page.querySelectorAll(".repo-card[data-repo]");
    const userCards = page.querySelectorAll(".repo-card[data-user]");

    repoCards.forEach((card) => hydrateRepoCard(card));
    userCards.forEach((card) => hydrateUserCard(card));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
