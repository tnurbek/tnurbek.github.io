---
layout: page
title: FedPeWS
description: 
img: assets/img/12.jpg
importance: 1
category: work
related_publications: false
permalink: /fedpews/
projectpage: yess
mathjax: true
---


<div style="text-align: center; margin-bottom: 15px">
    <h2 style="font-weight: bold;">FedPeWS: Personalized Warmup via Subnetworks for Enhanced Heterogeneous Federated Learning</h2> 
    <h4>
        <strong style="margin-right: 20px;"><a href="https://tnurbek.github.io/" target="_blank" rel="noopener noreferrer">Nurbek Tastan<sup>1</sup></a></strong>
        <strong style="margin-right: 20px;"><a href="https://sites.google.com/view/samuelhorvath/" target="_blank" rel="noopener noreferrer">Samuel Horvath<sup>1</sup></a></strong>
        <strong><a href="https://cse.msu.edu/~nandakum/" target="_blank" rel="noopener noreferrer">Karthik Nandakumar<sup>1,2</sup></a></strong>
    </h4>
    <h4>
    </h4>
    <div style="display: flex; justify-content: center; align-items: center; gap: 40px;">
        <div style="text-align: center; position: relative; max-width: 80%; margin-top: 20px;">
            <sup style="padding-right: 3px; font-size: 20px; font-weight: normal;"><sup>1</sup>Mohamed bin Zayed University of Artificial Intelligence (MBZUAI)</sup> 
            <br/> 
            <sup style="padding-right: 3px; font-size: 20px; font-weight: normal;"><sup>2</sup>Michigan State University (MSU)</sup> 
        </div>
    </div>
</div>
<div class="row">
    <div class="col-sm-12">
        <div class="b-container" style="text-align: center; margin-bottom: 20px;"> 
            <a href="https://openreview.net/pdf?id=iYwiyS1YdQ" target="_blank" rel="noopener noreferrer" class="btn" style="font-size: 1.1rem; text-transform: lowercase; border-radius: 1.05rem; padding: .7rem 2.14rem;"> <i class="fa-solid fa-file-pdf"></i>  Paper </a> 
            <a href="https://github.com/tnurbek/fedpews/" target="_blank" rel="noopener noreferrer" class="btn" style="font-size: 1.1rem; text-transform: lowercase; border-radius: 1.05rem; padding: .7rem 2.14rem;"> <i class="fa-solid fa-file-code"></i>  Code </a> 
            <!-- <a href="" target="_blank" rel="noopener noreferrer" class="btn" style="font-size: 1.1rem; text-transform: lowercase; border-radius: 1.05rem; padding: .7rem 2.14rem;"> <i class="fa-brands fa-youtube"></i>  Video </a>  -->
            <!-- <a href="" target="_blank" rel="noopener noreferrer" class="btn" style="font-size: 1.1rem; text-transform: lowercase; border-radius: 1.05rem; padding: .7rem 2.14rem;"> <i class="fa-solid fa-file-powerpoint"></i>  Slides </a>  -->
        </div>
    </div>
</div>


<div class="row justify-content-between" style="margin-top: 75px;">
    <div class="col-sm-9 mx-auto"> 
        <h3 class="text-center" style="font-weight: bold;"><b>Abstract</b></h3> 
        <p style="text-align: justify;">
            Statistical data heterogeneity is a significant barrier to convergence in federated learning (FL). While prior work has advanced heterogeneous FL through better optimization objectives, these methods fall short when there is <b>extreme</b> data heterogeneity among collaborating participants. We hypothesize that convergence under extreme data heterogeneity is primarily hindered due to the aggregation of conflicting updates from the participants in the initial collaboration rounds. To overcome this problem, we propose a warmup phase where each participant learns a personalized mask and updates only a subnetwork of the full model. This <b>personalized warmup</b> allows the participants to focus initially on learning specific <b>subnetworks</b> tailored to the heterogeneity of their data. After the warmup phase, the participants revert to standard federated optimization, where all parameters are communicated. We empirically demonstrate that the proposed personalized warmup via subnetworks (FedPeWS) approach improves accuracy and convergence speed over standard federated optimization methods. 
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
        {% include figure.liquid loading="eager" path="assets/img/fedpews/fedpews-scheme.png" title="FedPeWS Algorithm" class="img-fluid z-depth-1" %} 
    </div>
</div>
<div class="caption text-left" style="text-align: justify;">
    Conceptual illustration of training personalized subnetworks in federated learning. 
</div>

<hr>

#### **FedPeWS - Main Algorithm** 

<div class="row justify-content-between">
    <div class="col-sm-10 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/fedpews/AlgoFed.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<hr>


#### **How FedPeWS works?** 

<div class="row justify-content-between">
    <div class="col-sm-12 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/fedpews/fedpews-last.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-left" style="text-align: justify;">
    Illustration of the proposed FedPeWS algorithm for two participants, which aggregates partial subnetworks (\(x_i^t \odot m_i^t\)) during the warmup phase to obtain a shared global model \(x_g^t\). Here, \(x_i^t\) and \(m_i^t\) denote the local model and personalized mask of the \(i^{\text{th}}\) participant in the $t^{\text{th}}$ round. 
</div>


##### **FedPeWS-Fixed. Fixed Mask Generation** 

<div class="row justify-content-between">
    <div class="col-sm-12 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/fedpews/fixedmask.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption text-left" style="text-align: justify;">
    Illustration of manual mask setting in the <b>FedPeWS-Fixed</b> method. The left figure illustrates the complete network with all neurons active and full connections. The middle figure represents subnetwork 1, utilizing only the left portion of the full network, where \(m_1\) corresponds to this left side. Conversely, the right figure indicates the part of the network used for subnetwork 2. This setting is employed in all experiments involving \(N=2\) participants. 
</div>

<hr>


#### **Results: Improved communication efficiency and accuracy**


<table style="width: 100%; border-collapse: collapse; margin-top: 20px;" border="1" class="text-center col-sm-12 mx-auto">
    <caption>The required number of collaboration rounds to reach target accuracy \(\upsilon\) \(\%\) and the final accuracy after \(T\) rounds. The results are averaged over 3 seeds. <span style="color: red;">\(\times\)</span> indicates that the algorithm cannot reach target accuracy \(\upsilon\) within \(T\) rounds and <span style="color: red;">NA</span> means that it reaches \(\upsilon\) only in one random seed. </caption>
    <thead>
        <tr style="background-color: lightgrey;">
            <th colspan="2">Dataset / Batch size</th>
            <th colspan="3">Synthetic-32K, 32</th>
            <th>Synthetic-3.2K, 8</th>
        </tr>
        <tr style="background-color: lightgrey;">
            <th colspan="2">Parameters \( \{ \eta_g / \lambda / \tau \} \)</th>
            <th>\( \{1.0 / 5.0 / 0.125\} \)</th>
            <th>\( \{0.5/2.0/0.2\} \)</th>
            <th>\( \{0.25/1.0/0.1875\} \)</th>
            <th>\( \{0.1/2.0/0.1\} \)</th>
        </tr>
        <tr style="background-color: lightgrey;">
            <th colspan="2">Target accuracy \( \upsilon (\%) \)</th>
            <th>99</th>
            <th>90</th>
            <th>75</th>
            <th>99</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="2">No. of rounds to reach target accuracy</td>
            <td>FedAvg</td>
            <td>148 ± 3.79</td> 
            <td style="background-color: lightcoral; color: red;"> 199 ± NA </td>
            <td style="background-color: lightcoral; color: red;"> &times;  </td>
            <td style="background-color: lightcoral; color: red;"> 371 ± NA </td>
        </tr>
        <tr style="background-color: lightblue;">
            <td>FedAvg+PeWS</td>
            <td>115 ± 7.21</td>
            <td>182 ± 6.81</td>
            <td>286 ± 7.93</td>
            <td>301 ± 10.59</td>
        </tr>
        <tr>
            <td rowspan="2">Final accuracy after \( T \) collaboration rounds</td>
            <td>FedAvg</td>
            <td>99.94 ± 0.05</td>
            <td>91.40 ± 7.25</td>
            <td>67.64 ± 0.90</td>
            <td>97.33 ± 3.89</td>
        </tr>
        <tr  style="background-color: lightblue;">
            <td>FedAvg+PeWS</td>
            <td>99.96 ± 0.01</td>
            <td>99.49 ± 0.60</td>
            <td>83.50 ± 3.52</td>
            <td>99.66 ± 0.19</td>
        </tr>
    </tbody>
</table>
<!-- <div class="caption text-left">
    The required number of collaboration rounds to reach target accuracy \(\upsilon\) \(\%\) and the final accuracy after \(T\) rounds. The results are averaged over 3 seeds. <span style="color: red;">\(\times\)</span> indicates that the algorithm cannot reach target accuracy \(\upsilon\) within \(T\) rounds and <span style="color: red;">NA</span> means that it reaches \(\upsilon\) only in one random seed. 
</div> -->

<br/> 


<div class="row justify-content-between">
    <div class="col-sm-12 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/fedpews/comb-synth-4-line-v2-1.png" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            Results on Synthetic-{32, 3.2}K datasets with batch sizes {32, 8}, global learning rates \(\eta_g \in \{1.0, 0.5, 0.25, 0.1\}\) and communication rounds \(T \in \{200, 250, 400, 500\}\). FedPeWS consistently converges faster and outperforms FedAvg. 
        </div>
    </div>
</div>

<div class="row">
    <div class="col-sm-7 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/fedpews/synth-n4-acc-loss.png" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            Visualization of validation accuracy and loss on the Synthetic-32K dataset with \(N=4\).
        </div> 
    </div>
</div>


<hr>

#### **Results: Sensitivity analysis**


<div class="row justify-content-between">
    <div class="col-sm-6 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/fedpews/cifarmnist-both-last-v2.png" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            (a) CIFAR-MNIST dataset 
        </div>
    </div>
    <div class="col-sm-6 mx-auto">
        {% include figure.liquid loading="eager" path="assets/img/fedpews/pot-both-last-v2.png" title="example image" class="img-fluid z-depth-1" %}
        <div class="caption text-left">
            (b) {Path-OCT-Tissue}MNIST dataset 
        </div>
    </div>
    <div class="caption text-left" style="margin-top: -0.5cm;">
        Results for experiments with $T=300$ on (a) CIFAR-MNIST and (b) {Path-OCT-Tissue}MNIST datasets. <b>(a)</b> Participant 1 uses MNIST; Participant 2 uses CIFAR-10; ablation study for \(\lambda\) and \(\tau\). <b>(b)</b> \(N=3\) participants use {PathMNIST, OCTMNIST, TissueMNIST}; ablation study for \(\lambda\) and \(\tau\). <b>FedPeWS-Fixed</b> results appear in the last row; \(\tau=0.0\) denotes FedAvg. 
    </div>
</div>

<hr> 


#### **Results: Comparison to SOTA algorithms**



<table style="width: 100%; border-collapse: collapse; margin-top: 20px;" border="1" class="text-center col-sm-8 mx-auto">
    <caption>Comparison to the SOTA algorithms</caption>
    <thead>
        <tr style="background-color: lightgrey;">
            <th>Dataset</th>
            <th>CIFAR-MNIST</th>
            <th>{P-O-T}MNIST</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>FedAvg</td>
            <td>71.78 ± 0.66</td>
            <td>52.83 ± 1.26</td>
        </tr>
        <tr>
            <td>FedProx</td>
            <td>72.27 ± 0.88</td>
            <td>51.28 ± 1.03</td>
        </tr>
        <tr>
            <td>SCAFFOLD</td>
            <td>71.83 ± 0.24</td>
            <td>53.05 ± 0.60</td>
        </tr>
        <tr>
            <td>FedNova</td>
            <td>71.63 ± 0.98</td>
            <td>53.05 ± 0.83</td>
        </tr>
        <tr>
            <td>MOON</td>
            <td>71.84 ± 1.09</td>
            <td>52.10 ± 0.19</td>
        </tr>
        <tr style="background-color: lightblue;">
            <td>FedAvg+PeWS</td>
            <td>75.83 ± 0.88</td>
            <td>55.12 ± 0.56</td>
        </tr>
        <tr style="background-color: lightblue;">
            <td>FedProx+PeWS</td>
            <td>75.04 ± 0.85</td>
            <td>54.67 ± 0.43</td>
        </tr>
    </tbody>
</table>



<hr>

#### **Conclusion**

<p align="justify">In this work, we introduced a novel concept called <b>personalized warmup via subnetworks</b> for heterogeneous FL -- a strategy that enhances convergence speed and can seamlessly integrate with existing optimization techniques. Results demonstrate that the proposed <b>FedPeWS</b> approach achieves higher accuracy than the relevant baselines, especially when there is extreme statistical heterogeneity.</p> 

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
@InProceedings{tastan2025fedpews,
    title={Fed{PeWS}: Personalized Warmup via Subnetworks for Enhanced Heterogeneous Federated Learning},
    author={Nurbek Tastan and Samuel Horv{\'a}th and Martin Tak{\'a}{\v{c}} and Karthik Nandakumar},
    booktitle={The Second Conference on Parsimony and Learning (Proceedings Track)},
    year={2025},
    url={https://openreview.net/forum?id=iYwiyS1YdQ} 
}
```

{% endraw %}
