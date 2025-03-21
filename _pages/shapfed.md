---
layout: page
title: ShapFed
description: 
img: assets/img/12.jpg
importance: 1
category: work
related_publications: false
permalink: /shapfed/
projectpage: yess
mathjax: true
---


<div style="text-align: center; margin-bottom: 15px">
    <h2 style="font-weight: bold;">Redefining Contributions: Shapley-Driven Federated Learning</h2> 
    <h4>
        <strong style="margin-right: 20px;"><a href="https://tnurbek.github.io/" target="_blank" rel="noopener noreferrer">Nurbek Tastan</a></strong>
        <strong style="margin-right: 20px;"><a href="https://www.linkedin.com/in/samarfares/" rel="noopener noreferrer">Samar Fares</a></strong>
        <strong><a href="https://www.toluwaniaremu.com/" target="_blank" rel="noopener noreferrer">Toluwani Aremu</a></strong>
    </h4>
    <h4>
        <strong style="margin-right: 20px;"><a href="https://samuelhorvath.github.io/" target="_blank" rel="noopener noreferrer">Samuel Horvath</a></strong>
        <strong><a href="https://www.sprintai.org/nkarthik" target="_blank" rel="noopener noreferrer">Karthik Nandakumar</a></strong>
    </h4>
    <div style="display: flex; justify-content: center; align-items: center; gap: 40px;">
        <div style="text-align: center; position: relative; max-width: 80%; margin-top: 20px;">
            <sup style="padding-right: 3px; font-size: 20px; font-weight: normal;">Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</sup>
        </div>
    </div>
</div>
<div class="row">
    <div class="col-sm-12">
        <div class="b-container" style="text-align: center; margin-bottom: 20px;"> 
            <a href="https://arxiv.org/abs/2406.00569/" target="_blank" rel="noopener noreferrer" class="btn" style="font-size: 1.1rem; text-transform: lowercase; border-radius: 1.05rem; padding: .7rem 2.14rem;"> <i class="fa-solid fa-file-pdf"></i>  Paper </a> 
            <a href="https://github.com/tnurbek/shapfed/" target="_blank" rel="noopener noreferrer" class="btn" style="font-size: 1.1rem; text-transform: lowercase; border-radius: 1.05rem; padding: .7rem 2.14rem;"> <i class="fa-solid fa-code"></i>  Code </a> 
            <a href="" target="_blank" rel="noopener noreferrer" class="btn" style="font-size: 1.1rem; text-transform: lowercase; border-radius: 1.05rem; padding: .7rem 2.14rem;"> <i class="fa-brands fa-youtube"></i>  Video </a> 
            <a href="" target="_blank" rel="noopener noreferrer" class="btn" style="font-size: 1.1rem; text-transform: lowercase; border-radius: 1.05rem; padding: .7rem 2.14rem;"> <i class="fa-solid fa-file-powerpoint"></i>  Slides </a> 
        </div>
    </div>
</div>


<div class="row justify-content-between" style="margin-top: 75px;">
    <div class="col-sm-9 mx-auto"> 
        <h3 class="text-center" style="font-weight: bold;"><b>Abstract</b></h3> 
        <p style="text-align: justify;">
            Federated learning (FL) has emerged as a pivotal approach in machine learning, enabling multiple participants to collaboratively train a global model without sharing raw data. While FL finds applications in various domains such as healthcare and finance, it is challenging to ensure global model convergence when participants do not contribute equally and/or honestly. To overcome this challenge, principled mechanisms are required to evaluate the contributions made by individual participants in the FL setting. Existing solutions for contribution assessment rely on general accuracy evaluation, often failing to capture nuanced dynamics and class-specific influences. This paper proposes a novel contribution assessment method called ShapFed for fine-grained evaluation of participant contributions in FL. Our approach uses Shapley values from cooperative game theory to provide a granular understanding of class-specific influences. Based on ShapFed, we introduce a weighted aggregation method called ShapFed-WA, which outperforms conventional federated averaging, especially in class-imbalanced scenarios. Personalizing participant updates based on their contributions further enhances collaborative fairness by delivering differentiated models commensurate with the participant contributions. Experiments on CIFAR-10, Chest X-Ray, and Fed-ISIC2019 datasets demonstrate the effectiveness of our approach in improving utility, efficiency, and fairness in FL systems.
        </p>
    </div>
</div>

<hr>


<!-- Every project has a beautiful feature showcase page. -->
<!-- It's easy to include images in a flexible 3-column grid format. -->
<!-- Make your photos 1/3, 2/3, or full width. -->

<!-- To give your project a background in the portfolio page, just add the img tag to the front matter like so: -->

<div class="row">
    <div class="col-sm-12 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/shapfed.png" title="ShapFed Algorithm" class="img-fluid z-depth-1" %} 
    </div>
</div>
<div class="caption text-left" style="text-align: justify;">
    <b>Overview of our proposed ShapFed algorithm:</b> Each participant \(i\) transmits their locally computed iterates \(w_i\) to the server. The server then, (i) computes class-specific Shapley values (CSSVs) using the last layer parameters (gradients) \(\hat{w}\), (ii) aggregates the weights by employing normalized contribution assessment values \(\tilde{\gamma}_i\) for each participant \(i\), and (iii) broadcasts the personalized weights \(\bar{w}_i\) to each participant, using their individual, not-normalized contribution values \(\gamma_i\). 
</div>

<hr>

#### **ShapFed - Main Algorithm** 

<div class="row justify-content-between">
    <div class="col-sm-5 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/shapfed/pseudo-code.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-7">
        {% include figure.liquid loading="eager" path="assets/img/shapfed/alignment.jpg" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            <b>Weighted Aggregation:</b> The optimal weights \(w_s^{\star}\) are derived using Equation 7, while <span style="color: red;">\(w_s\)</span> represents the result of applying equal weights (FedAvg). <b>Personalization:</b> Rather than distributing a uniform global model to all users, we provide personalized weights \(\bar{w}_i\), which are \(\gamma_i\) combinations of individual user weights \(w_i\) and the optimally aggregated weight \(w_s^{\star}\). 
        </div> 
    </div>
</div>

<hr>

#### **Results: Contribution Assessment**

<div class="row justify-content-between">
    <div class="col-sm-5 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/shapfed/contribution-comparison.jpg" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            Comparison of our proposed contribution assessment algorithm (CSSV) with CGSV and true Shapley value computations using ResNet-34 architecture on Chest X-Ray dataset.
        </div>
    </div>
    <div class="col-sm-7">
        {% include figure.liquid loading="eager" path="assets/img/shapfed/cifar10-skew.jpg" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            Heatmap visualization of class-specific Shapley values for heterogeneous setting (explained in Section 5.2) evaluated on CIFAR-10 dataset.
        </div> 
    </div>
</div>

<hr>

#### **Results: Weighted Aggregation**

<div class="row justify-content-between">
    <div class="col-sm-9 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/shapfed/imbalanced_cifar.jpg" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            Comparing FedAvg and ShapFed-WA on CIFAR10 under an imbalanced split scenario: insights into the balanced accuracy of four individual participants. 
        </div>
    </div>
</div>


<div class="row justify-content-between">
    <div class="col-sm-8 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/shapfed/fedisic-plot.jpg" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            <b>(Left)</b> The balanced accuracy of our methods (ShapFed-WA & ShapFed) vs FedAvg. <b>(Right)</b> Per-participant accuracy using all methods evaluated on Fed-ISIC2019 dataset. 
        </div>
    </div>
</div>

<hr> 

#### **Results: Personalization**

<!-- <table border="1" style="width:100%; border-collapse: collapse;" class="text-center">
    <caption>Performance and fairness comparison with our method and FedAvg. We use Pearson's correlation (↑) as a fairness metric on CIFAR-10. The red highlight indicates a negative gain from collaboration.</caption>
    <thead>
        <tr style="background-color: lightblue;">
            <th colspan="2">Dataset / Partition</th>
            <th>Setting</th>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th>P4</th>
            <th>P5</th>
            <th>Corr.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">ChestXRay</td>
            <td rowspan="3">Hetero.</td>
            <td>Individual</td>
            <td>50.0</td>
            <td>64.7</td>
            <td>62.0</td>
            <td>53.7</td>
            <td>50.0</td>
            <td>---</td>
        </tr>
        <tr>
            <td>FedAvg</td>
            <td>50.0</td>
            <td>55.8</td>
            <td>61.9</td>
            <td>54.2</td>
            <td>50.0</td>
            <td>0.82</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed</td>
            <td style="background-color: lightgreen;">50.0</td>
            <td style="background-color: lightgreen;">65.2</td>
            <td style="background-color: lightgreen;">69.5</td>
            <td style="background-color: lightgreen;">58.5</td>
            <td style="background-color: lightgreen;">50.0</td>
            <td style="background-color: lightgreen; font-weight: bold;">0.93</td>
        </tr>
        <tr>
            <td rowspan="8">CIFAR-10</td>
            <td rowspan="4">Imb.</td>
            <td>Individual</td>
            <td>75.8</td>
            <td>45.4</td>
            <td>48.6</td>
            <td>31.6</td>
            <td>---</td>
            <td>---</td>
        </tr>
        <tr>
            <td>FedAvg</td>
            <td style="background-color: lightred;">56.6</td>
            <td>56.8</td>
            <td>63.8</td>
            <td>64.2</td>
            <td>---</td>
            <td>-0.60</td>
        </tr>
        <tr>
            <td>CGSV</td>
            <td style="background-color: lightred;">57.2</td>
            <td>59.0</td>
            <td>58.8</td>
            <td>60.4</td>
            <td>---</td>
            <td>-0.98</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed</td>
            <td style="background-color: lightgreen;">81.4</td>
            <td style="background-color: lightgreen;">78.2</td>
            <td style="background-color: lightgreen;">71.8</td>
            <td style="background-color: lightgreen;">73.6</td>
            <td style="background-color: lightgreen;">---</td>
            <td style="background-color: lightgreen; font-weight: bold;">0.74</td>
        </tr>
        <tr>
            <td rowspan="4">Hetero.</td>
            <td>Individual</td>
            <td>75.2</td>
            <td>68.8</td>
            <td>66.8</td>
            <td>69.0</td>
            <td>---</td>
            <td>---</td>
        </tr>
        <tr>
            <td>FedAvg</td>
            <td>74.6</td>
            <td>70.2</td>
            <td>70.2</td>
            <td>76.0</td>
            <td>---</td>
            <td>0.53</td>
        </tr>
        <tr>
            <td>CGSV</td>
            <td style="background-color: lightred;">55.0</td>
            <td style="background-color: lightred;">55.8</td>
            <td style="background-color: lightred;">57.2</td>
            <td style="background-color: lightred;">52.6</td>
            <td>---</td>
            <td>-0.26</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed</td>
            <td style="background-color: lightgreen;">79.8</td>
            <td style="background-color: lightgreen;">75.4</td>
            <td style="background-color: lightgreen;">69.0</td>
            <td style="background-color: lightgreen;">75.0</td>
            <td style="background-color: lightgreen;">---</td>
            <td style="background-color: lightgreen; font-weight: bold;">0.90</td>
        </tr>
    </tbody>
</table> -->


<table style="width: 100%; border-collapse: collapse; margin-top: 20px;" border="1" class="text-center">
    <caption>Performance and fairness comparison with our method and FedAvg. We use Pearson's correlation (&#8593;) as a fairness metric on CIFAR-10. The red highlight indicates a negative gain from collaboration.</caption>
    <thead>
        <tr style="background-color: lightblue;">
            <th colspan="2">Dataset / Partition</th>
            <th>Setting</th>
            <th>\(P_1\)</th>
            <th>\(P_2\)</th>
            <th>\(P_3\)</th>
            <th>\(P_4\)</th>
            <th>\(P_5\)</th>
            <th>Corr.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">ChestXRay</td>
            <td rowspan="3">Hetero.</td>
            <td>Individual</td>
            <td>50.0</td>
            <td>64.7</td>
            <td>62.0</td>
            <td>53.7</td>
            <td>50.0</td>
            <td>---</td>
        </tr>
        <tr>
            <td>FedAvg</td>
            <td>50.0</td>
            <td>55.8</td>
            <td>61.9</td>
            <td>54.2</td>
            <td>50.0</td>
            <td>0.82</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed</td>
            <td>50.0</td>
            <td>65.2</td>
            <td>69.5</td>
            <td>58.5</td>
            <td>50.0</td>
            <td><strong>0.93</strong></td>
        </tr>
        <tr>
            <td rowspan="8">CIFAR-10</td>
            <td rowspan="4">Imb.</td>
            <td>Individual</td>
            <td>75.8</td>
            <td>45.4</td>
            <td>48.6</td>
            <td>31.6</td>
            <td>---</td>
            <td>---</td>
        </tr>
        <tr>
            <td>FedAvg</td>
            <td style="background-color: lightcoral;">56.6</td>
            <td>56.8</td>
            <td>63.8</td>
            <td>64.2</td>
            <td>---</td>
            <td>-0.60</td>
        </tr>
        <tr>
            <td>CGSV</td>
            <td style="background-color: lightcoral;">57.2</td>
            <td>59.0</td>
            <td>58.8</td>
            <td>60.4</td>
            <td>---</td>
            <td>-0.98</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed</td>
            <td>81.4</td>
            <td>78.2</td>
            <td>71.8</td>
            <td>73.6</td>
            <td>---</td>
            <td><strong>0.74</strong></td>
        </tr>
        <tr>
            <td rowspan="4">Hetero.</td>
            <td>Individual</td>
            <td>75.2</td>
            <td>68.8</td>
            <td>66.8</td>
            <td>69.0</td>
            <td>---</td>
            <td>---</td>
        </tr>
        <tr>
            <td>FedAvg</td>
            <td style="background-color: lightcoral;">74.6</td>
            <td>70.2</td>
            <td>70.2</td>
            <td>76.0</td>
            <td>---</td>
            <td>0.53</td>
        </tr>
        <tr>
            <td>CGSV</td>
            <td style="background-color: lightcoral;">55.0</td>
            <td style="background-color: lightcoral;">55.8</td>
            <td style="background-color: lightcoral;">57.2</td>
            <td style="background-color: lightcoral;">52.6</td>
            <td>---</td>
            <td>-0.26</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed</td>
            <td>79.8</td>
            <td>75.4</td>
            <td>69.0</td>
            <td>75.0</td>
            <td>---</td>
            <td><strong>0.90</strong></td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="9">Note: Correlation coefficients indicate the fairness level, with higher values showing better fairness.</td>
        </tr>
    </tfoot>
</table>


<!-- <table border="1" style="width:87.5%; border-collapse: collapse; margin: auto;" class="text-center">
    <caption>Performance and fairness comparison using Pearson's correlation (↑) as a fairness metric on Fed-ISIC2019. The red highlight indicates a negative gain from collaboration.</caption>
    <thead>
        <tr style="background-color: lightblue;">
            <th>Setting</th>
            <th>P1</th>
            <th>P2</th>
            <th>P3</th>
            <th>P4</th>
            <th>P5</th>
            <th>P6</th>
            <th>Corr.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Individual</td>
            <td>67.2</td>
            <td>25.7</td>
            <td>42.3</td>
            <td>31.0</td>
            <td>18.5</td>
            <td>15.6</td>
            <td>---</td>
        </tr>
        <tr>
            <td>FedAvg</td>
            <td style="background-color: lightcoral;">65.4</td>
            <td>40.9</td>
            <td>57.2</td>
            <td>59.3</td>
            <td>51.5</td>
            <td>56.2</td>
            <td>0.63</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed-WA</td>
            <td>69.3</td>
            <td>44.3</td>
            <td>65.0</td>
            <td>63.1</td>
            <td>54.8</td>
            <td>61.2</td>
            <td>0.62</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed</td>
            <td>68.5</td>
            <td>44.4</td>
            <td>61.9</td>
            <td>60.4</td>
            <td>40.6</td>
            <td>53.2</td>
            <td style="font-weight: bold;">0.84</td>
        </tr>
    </tbody>
</table> -->


<table style="width: 87.5%; margin: auto; border-collapse: collapse; border: 1px solid black;" border="1" class="text-center">
    <caption style="margin-bottom: 8px;">Performance and fairness comparison using Pearson's correlation (&#8593;) as a fairness metric on Fed-ISIC2019. The red highlight indicates a negative gain from collaboration.</caption>
    <thead>
        <tr style="background-color: lightblue;">
            <th>Setting</th>
            <th>\(P_1\)</th>
            <th>\(P_2\)</th>
            <th>\(P_3\)</th>
            <th>\(P_4\)</th>
            <th>\(P_5\)</th>
            <th>\(P_6\)</th>
            <th>Corr.</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Individual</td>
            <td>67.2</td>
            <td>25.7</td>
            <td>42.3</td>
            <td>31.0</td>
            <td>18.5</td>
            <td>15.6</td>
            <td>---</td>
        </tr>
        <tr>
            <td>FedAvg</td>
            <td style="background-color: lightcoral;">65.4</td>
            <td>40.9</td>
            <td>57.2</td>
            <td>59.3</td>
            <td>51.5</td>
            <td>56.2</td>
            <td>0.63</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed-WA</td>
            <td>69.3</td>
            <td>44.3</td>
            <td>65.0</td>
            <td>63.1</td>
            <td>54.8</td>
            <td>61.2</td>
            <td>0.62</td>
        </tr>
        <tr style="background-color: lightgreen;">
            <td>ShapFed</td>
            <td>68.5</td>
            <td>44.4</td>
            <td>61.9</td>
            <td>60.4</td>
            <td>40.6</td>
            <td>53.2</td>
            <td><strong>0.84</strong></td>
        </tr>
    </tbody>
</table>


<hr>

#### **Summary**

<p align="justify">This work proposes Class-Specific Shapley Values (CSSVs) to quantify participant contributions at a granular level. The contributions of this work include a novel method to deepen the understanding of participant impact and improve fairness analysis. Evaluation against FedAvg shows superior performance and additional experiments reveal enhanced fairness by personalizing client updates based on contributions. Overall, the approach aims to achieve a more equitable distribution of benefits in FL. In future, we plan to conduct an in-depth theoretical analysis aimed at identifying the specific characteristics that contribute to an effective estimation of Shapley values. This analysis will enhance our understanding of the factors that influence the accuracy and reliability of Shapley value approximations. Furthermore, an investigation into what makes our approximation of cosine similarity from the last layer a robust indicator of contributions will be explored.</p>

<!-- The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above: -->

#### **Contact**
<p>
  Contact me at <a href="mailto:nurbek.tastan@mbzuai.ac.ae">nurbek [dot] tastan [at] mbzuai [dot] ac [dot] ae</a>. 
</p>


#### **Citation**
{% raw %}

```
@InProceedings{tastan2024redefining,
    author    = {Tastan, Nurbek and Fares, Samar and Aremu, Toluwani and Horvath, Samuel and Nandakumar, Karthik},
    title     = {Redefining Contributions: Shapley-Driven Federated Learning}, 
    booktitle = {International Joint Conference on Artificial Intelligence (IJCAI)},
    year      = {2024},
}
```

{% endraw %}
